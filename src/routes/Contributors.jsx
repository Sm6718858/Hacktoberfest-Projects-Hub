import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Contributors = () => {
    const [contributors, setContributors] = useState([]);
    const [error, setError] = useState(null);
    const { theme } = useContext(ThemeContext);

    const owner = "Pinaka-Pani-18";
    const repo = "Hacktoberfest-Projects-Hub";

    useEffect(() => {
        const locallyCachedContributors = localStorage.getItem("contributors");
        if (locallyCachedContributors) {
            let contributors = JSON.parse(locallyCachedContributors);
            const currentTimestamp = Math.floor(Date.now() / 1000);
            const secondsToCache = 7200;

            if (contributors.cachedAt + secondsToCache > currentTimestamp)
                return setContributors(contributors.data);
        }

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/repos/${owner}/${repo}/contributors`
                );
                const data = await response.json();
                const currentTimestamp = Math.floor(Date.now() / 1000);

                localStorage.setItem(
                    "contributors",
                    JSON.stringify({
                        data: data,
                        cachedAt: currentTimestamp,
                    })
                );
                setContributors(data);
            } catch {
                setError("Error occurred while fetching contributors.");
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white pt-28 pb-10 transition-all duration-300">
            <h1 className="text-center text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Contributors
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 md:px-20">
                {error ? (
                    <h1 className="text-2xl">{error}</h1>
                ) : (
                    contributors.map((contributor) => (
                        <div
                            onClick={() => window.open(contributor.html_url)}
                            key={contributor.id}
                            className="cursor-pointer rounded-xl p-6 shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 text-center"
                        >
                            <img
                                src={contributor.avatar_url}
                                alt="Contributor Avatar"
                                className="w-28 h-28 object-cover mx-auto rounded-full border-4 border-blue-500 dark:border-purple-400"
                            />

                            <p className="mt-4 font-semibold text-xl hover:text-blue-500 dark:hover:text-purple-400 transition-colors">
                                {contributor.login}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
