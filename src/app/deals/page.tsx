import React from "react";

type Deal = {
    id: string;
    name: string;
    client: string;
    value: number;
    stage: "Prospecting" | "Qualified" | "Proposal" | "Negotiation" | "Closed Won" | "Closed Lost";
    owner: string;
    updatedAt: string;
};

const mockDeals: Deal[] = [
    {
        id: "1",
        name: "Website Redesign",
        client: "Acme Corp",
        value: 25000,
        stage: "Proposal",
        owner: "Jane Doe",
        updatedAt: "2024-06-10T14:30:00Z",
    },
    {
        id: "2",
        name: "CRM Integration",
        client: "Beta Ltd",
        value: 18000,
        stage: "Negotiation",
        owner: "John Smith",
        updatedAt: "2024-06-09T10:15:00Z",
    },
    {
        id: "3",
        name: "Annual Support",
        client: "Gamma Inc",
        value: 12000,
        stage: "Qualified",
        owner: "Alice Lee",
        updatedAt: "2024-06-08T09:00:00Z",
    },
];

function stageBadge(stage: Deal["stage"]) {
    const base = "px-2 py-1 rounded text-xs font-medium";
    switch (stage) {
        case "Prospecting":
            return `${base} bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200`;
        case "Qualified":
            return `${base} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`;
        case "Proposal":
            return `${base} bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200`;
        case "Negotiation":
            return `${base} bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200`;
        case "Closed Won":
            return `${base} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`;
        case "Closed Lost":
            return `${base} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`;
        default:
            return base;
    }
}

export default function DealsPage() {
    return (
        <main className="p-6 max-w-6xl mx-auto">
            <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Deals</h1>
                <button
                    className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
                    aria-label="Add new deal"
                >
                    <span className="mr-2">+</span> New Deal
                </button>
            </header>
            <section className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Deal Name</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Client</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Value</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Stage</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Owner</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Last Updated</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {mockDeals.map((deal) => (
                            <tr key={deal.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">{deal.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">{deal.client}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                                    ${deal.value.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={stageBadge(deal.stage)}>{deal.stage}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">{deal.owner}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                    {new Date(deal.updatedAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                        {mockDeals.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-gray-400 dark:text-gray-500">
                                    No deals found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </main>
    );
}