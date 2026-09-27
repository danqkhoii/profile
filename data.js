// Tệp cấu hình thông tin hồ sơ cá nhân
// Bạn có thể chỉnh sửa tất cả thông tin ở đây để thay đổi nội dung trên trang web.

window.profileData = {
    // Thông tin cá nhân cơ bản
    personal: {
        name: "Lê Đinh Đăng Khôi",
        role: "Students ",
        statusBadge: "⚡ Đang online",
        location: "Khánh Hòa, Việt Nam",
        bio: "người đẹp trai",
        
        // Đường dẫn Avatar (Hỗ trợ URL ảnh JPG/PNG/WebP hoặc URL Video MP4/WebM 4K)
        avatar: {
            type: "image", // Chỉnh 'image' cho ảnh hoặc 'video' cho video
            url: "https://cdn.discordapp.com/avatars/1136259637566521394/c9d4fe62dc6140c72c953c8768a3751c.png?size=1024",
            verified: true // Hiển thị tích xanh xác minh
        },

        // Nút liên hệ nhanh ở góc phải bên dưới
        quickContactEmail: "31th05lekhoi@gmail.com"
    },

    // Liên kết mạng xã hội
    socials: [
        {
            name: "Facebook",
            iconClass: "fa-brands fa-facebook-f text-blue-500",
            hoverBgClass: "hover:bg-blue-600/20 hover:border-blue-500/50",
            url: "https://www.facebook.com/profile.php?id=61585908399801"
        },
        {
            name: "Google / Email",
            iconClass: "fa-brands fa-google text-amber-500",
            hoverBgClass: "hover:bg-amber-600/20 hover:border-amber-500/50",
            url: "31th05lekhoi@gmail.com"
        },
        {
            name: "GitHub",
            iconClass: "fa-brands fa-github text-slate-200",
            hoverBgClass: "hover:bg-slate-700/30 hover:border-slate-600",
            url: "https://github.com/danqkhoii"
        },
    ],

    // Thống kê nhanh & Công nghệ (Bento Cards)
    statsAndSkills: {
        experience: {
            number: "1+ Năm",
            label: "KINH NGHIỆM",
            iconClass: "fa-solid fa-code-commit text-indigo-400"
        },
        completedProjects: {
            number: "2 Dự Án",
            label: "DISCORD ",
            iconClass: "fa-solid fa-rocket text-cyan-400"
        },
        // Công nghệ sử dụng
        skills: [
            { name: "Node.js", iconClass: "fa-brands fa-node-js", colorClass: "text-cyan-300" },
            { name: "Python(85%)", iconClass: "fa-brands fa-python", colorClass: "text-yellow-400" },
            { name: "JavaScript", iconClass: "fa-brands fa-js", colorClass: "text-amber-300" },
        ]
    },

    // Danh sách các dự án đã thực hiện
    projects: [
        {
            title: "roblox cookie checker ",
            category: "Web3 / DApp",
            categoryColorClass: "text-purple-400 border-purple-500/30",
            description: "kiem tra tinh trang coookie cua acc",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
            tags: ["python"],
            demoUrl: "https://danqkhoii.github.io/robloxcookieschecker",
            githubUrl: "https://github.com",
            isFullWidth: true
        },

    ],

    // Banner liên hệ cuối trang
    contactBanner: {
        title: "Bạn có dự án thú vị cần phát triển?",
        subtitle: "Liên hệ mình ngay nhé !",
        emailUrl: "https://mail.google.com/mail/u/0/#inbox",
        telegramUrl: "https://web.telegram.org/a/#8799036722"
    },

    // Nội dung Chân trang
    footerText: "© LÊ ĐINH ĐĂNG KHÔI."
};
