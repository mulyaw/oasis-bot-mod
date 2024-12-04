export function generateRandomId(length = 26) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}

function generateRandomCpuInfo() {
    const cpuModels = [
        "Intel Core I9-13900K",
        "AMD EPYC 7742",
        "AMD Ryzen 7950X3D",
        "Intel Core I9-12900K",
        "Intel Xeon E5-2682 V4",
        "AMD EPYC 9354",
        "Intel Core I9-9900K",
        "AMD Ryzen 9 7950X",
        "Intel Core i9-11900K",
        "AMD Ryzen 9 3950X",
        "Apple M3 Max",
        "Apple M2 Ultra",
        "Apple M2 Pro"
    ];

    const features = ["mmx", "sse", "sse2", "sse3", "ssse3", "sse4_1", "sse4_2", "avx"];
    const numOfProcessors = [4, 8, 16, 32][Math.floor(Math.random() * 4)];

    let processors = [];
    for (let i = 0; i < numOfProcessors; i++) {
        processors.push({
            usage: {
                idle: Math.floor(Math.random() * 2000000000000),
                kernel: Math.floor(Math.random() * 10000000000),
                total: Math.floor(Math.random() * 2000000000000),
                user: Math.floor(Math.random() * 50000000000)
            }
        });
    }

    return {
        archName: "x86_64",
        features: features,
        modelName: cpuModels[Math.floor(Math.random() * cpuModels.length)],
        numOfProcessors: numOfProcessors,
        processors: processors,
        temperatures: []
    };
}

function generateRandomGpuInfo() {
    const renderers = [
        "ANGLE (AMD, AMD Radeon(TM) Graphics (0x00001638) Direct3D11 vs_5_0 ps_5_0, D3D11)",
        "ANGLE (NVIDIA, GeForce GTX 1080 Ti Direct3D11 vs_5_0 ps_5_0, D3D11)",
        "ANGLE (Intel, Iris Xe Graphics (0x00008086) Direct3D11 vs_5_0 ps_5_0, D3D11)"
    ];
    const vendors = ["Google Inc. (AMD)", "NVIDIA", "Intel"];
    return {
        renderer: renderers[Math.floor(Math.random() * renderers.length)],
        vendor: vendors[Math.floor(Math.random() * vendors.length)]
    };
}

function generateRandomOperatingSystem() {
    const osList = ["windows", "linux", "macOS"];
    return osList[Math.floor(Math.random() * osList.length)];
}

export function generateRandomSystemData() {
    return {
        id: generateRandomId(26),
        type: "system",
        data: {
            gpuInfo: generateRandomGpuInfo(),
            memoryInfo: {
                availableCapacity: Math.floor(Math.random() * 1000000000) + 1000000000,
                capacity: Math.floor(Math.random() * 1000000000) + 2000000000
            },
            operatingSystem: generateRandomOperatingSystem(), 
            machineId: generateRandomId(32).toLowerCase(),
            cpuInfo: generateRandomCpuInfo()
        }
    };
}
