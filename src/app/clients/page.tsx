import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Link from 'next/link';

type Client = {
    id: string;
    name: string;
    email: string;
    company: string;
    status: "Active" | "Inactive" | "Prospect";
    industry: string;
    revenue: string;
    lastContact: string;
    avatar: string;
};

const mockClients: Client[] = [
    {
        id: "1",
        name: "Jane Doe",
        email: "jane.doe@acme.com",
        company: "Acme Corporation",
        status: "Active",
        industry: "Technology",
        revenue: "$450,000",
        lastContact: "2 days ago",
        avatar: "AC"
    },
    {
        id: "2",
        name: "John Smith",
        email: "john.smith@globex.com",
        company: "Global Solutions Ltd",
        status: "Active",
        industry: "Manufacturing",
        revenue: "$325,000",
        lastContact: "1 week ago",
        avatar: "GS"
    },
    {
        id: "3",
        name: "Alice Johnson",
        email: "alice.johnson@initech.com",
        company: "DataFlow Systems",
        status: "Active",
        industry: "Software",
        revenue: "$280,000",
        lastContact: "3 days ago",
        avatar: "DF"
    },
    {
        id: "4",
        name: "Mike Davis",
        email: "mike@techstart.io",
        company: "TechStart Inc",
        status: "Prospect",
        industry: "Technology",
        revenue: "$185,000",
        lastContact: "1 day ago",
        avatar: "TS"
    },
    {
        id: "5",
        name: "Sarah Wilson",
        email: "sarah@cloudfix.com",
        company: "CloudFix Solutions",
        status: "Inactive",
        industry: "Cloud Services",
        revenue: "$95,000",
        lastContact: "2 weeks ago",
        avatar: "CF"
    }
];

function statusColor(status: Client["status"]) {
    switch (status) {
        case "Active":
            return "bg-green-100 text-green-800";
        case "Inactive":
            return "bg-gray-100 text-gray-800";
        case "Prospect":
            return "bg-blue-100 text-blue-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
}

function getAvatarColor(index: number) {
    const colors = [
        "bg-blue-500",
        "bg-purple-500", 
        "bg-green-500",
        "bg-indigo-500",
        "bg-red-500"
    ];
    return colors[index % colors.length];
}

export default function ClientsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <Header />
            
            <main className="ml-64 pt-16 p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
                        <p className="text-gray-600">Manage your customer relationships and track engagement</p>
                    </div>
                    <div className="flex space-x-3">
                        <Link href="/leads" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>View Leads</span>
                        </Link>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span>Add Client</span>
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total Clients</p>
                                <p className="text-2xl font-bold text-gray-900">{mockClients.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Active Clients</p>
                                <p className="text-2xl font-bold text-gray-900">{mockClients.filter(c => c.status === 'Active').length}</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Prospects</p>
                                <p className="text-2xl font-bold text-gray-900">{mockClients.filter(c => c.status === 'Prospect').length}</p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                                <p className="text-2xl font-bold text-gray-900">$1.34M</p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Clients Table */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900">All Clients</h3>
                        <div className="flex space-x-3">
                            <input
                                type="text"
                                placeholder="Search clients..."
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" title="Filter by status">
                                <option>All Statuses</option>
                                <option>Active</option>
                                <option>Prospect</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {mockClients.map((client, index) => (
                                    <tr key={client.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className={`w-10 h-10 ${getAvatarColor(index)} rounded-full flex items-center justify-center text-white font-semibold`}>
                                                    {client.avatar}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{client.company}</div>
                                                    <div className="text-sm text-gray-500">{client.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.industry}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.revenue}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor(client.status)}`}>
                                                {client.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.lastContact}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <Link href={`/clients/${client.id}`} className="text-blue-600 hover:text-blue-900 mr-4">View</Link>
                                            <Link href={`/deals?client=${client.id}`} className="text-green-600 hover:text-green-900 mr-4">Deals</Link>
                                            <button className="text-red-600 hover:text-red-900">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
