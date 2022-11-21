import images from "./images"

const data = {
    user: {
        name: 'Vikrant Singh',
        img: images.avt
    },
    summary: [
        {
            title: 'Syllabus',
            subtitle: 'Sem 7',
            value: '7 Subjects',
            percent: 60,
            
        },
        {
            title: 'Resources',
            subtitle: '',
            value: 'Website / Notes',
            percent: 30
        },
        {
            title: 'DSA Placement Questions',
            subtitle: '450 Questions',
            value: 'By Love Baber DSA Sheet',
            percent: 45 
        },
        {
            title: 'YouTube Resources',
            subtitle: 'Related to your subjects',
            value: '275 Related Videos',
            percent: 55
        },
        {
            title: 'Road Map',
            subtitle: 'Semester Wise',
            value: 'Android/Web/Block-Chain/AI/ML/SDE',
            percent: 20
        },
        {
            title: 'Placement Resources',
            subtitle: 'Top Placement Web Sites',
            value: 'Top Web Sites',
            percent: 70
        }
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '678$',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '6 Subjects',
            title: ''
        },
        {
            value: '26 Students',
            title: 'B.Tech CSE VII'
        },
        {
            value: 'Ranking',
            title: '2'
        },
       
    ],
    revenueByChannel: [
        {
            title: 'Cyber Security',
            value: 70
        },
        {
            title: 'Data Mining and Business Intelligence',
            value: 40
        },
        {
            title: 'Introduction to Natural Language Processing',
            value: 60
        },
        {
            title: 'Introduction to Statistical Tools in Research',
            value: 30
        },
        {
            title: 'Object Oriented System Design',
            value: 56
        },
         {
            title: 'Software Project Management',
            value: 70
        }
    ],
    revenueByMonths: {
        labels: ['Anand', 'Anish', 'Apurva', 'Deepanshu', 'Vikrant', 'Harsha', 'Gautam', 'Akash', 'Aishani', 'Tripty', 'Subham', 'Aryan'],
        data: [250, 200, 300, 280, 320, 220, 310, 190,220 ,200, 250, 350]
    }
}

export default data