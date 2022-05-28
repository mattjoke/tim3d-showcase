const div = document.getElementById("container");
const config = {
    container: div,
    colors: {
        backgroundColor: "beige",
    },
    world: {
        centerOfWorld: [40, 0, 0],
        startPosition: [0, 0, 0],
    },
};
const manual = new Factory(config);

const steps = [];

function getRandom(min, max, not_min, not_max) {
    let rand = 0;
    do {
        rand = Math.random() * (max - min) + min;
    } while (rand > not_max || rand < not_min);
    return rand;
}

//Plate
for (let i = 2; i <= 4; i++) {
    steps.push({
        name: `Moving: ${i}`,
        positions: [
            {
                id: `${i}`,
                pose: {
                    position: [0, 0, 0],
                },
            },
        ],
    });
}

steps.push({
    name: `Moving: 5`,
    positions: [
        {
            id: `5`,
            pose: {
                position: [37, 8, 14.75],
            },
            animation: "z360deg"
        },
    ],
    animation: "x360deg"
});
steps.push({
    name: `Moving: 6`,
    positions: [
        {
            id: `6`,
            pose: {
                position: [37, -8, 14.75],
            },
        },
    ],
});

// Screws
/*
for (let i = 5; i <= 12; i++) {
    let add = [37, -8, 10.75];
    if (i % 2 != 0) add = [add[0], add[1], -add[2]];
    if (i > 14) add = [add[0], -add[1], add[2]];
    steps.push({
        name: `Moving: ${i}`,
        positions: [
            {
                id: `${i}`,
                pose: {
                    position: add,
                },
            },
        ],
    });
}
*/
for (let i = 7; i <= 10; i++) {
    let add = [32.025000000000006, -9, -14.75];
    if (i % 2 == 0) add = [add[0], add[1], -add[2]];
    if (i > 8) add = [add[0], -add[1], add[2]];
    steps.push({
        name: `Moving: ${i}`,
        positions: [
            {
                id: `${i}`,
                pose: {
                    position: add,
                },
            },
        ],
    });
}
for (let i = 11; i <= 12; i++) {
    steps.push({
        name: `Moving: ${i}`,
        positions: [
            {
                id: `${i}`,
                pose: {
                    position: i % 2 != 0 ? [37, -8, -18.75] : [37, 8, -18.75],
                },
            },
        ],
    });
}

// Nuts
for (let i = 13; i <= 16; i++) {
    let add = [37, -8, 10.75];
    if (i % 2 != 0) add = [add[0], add[1], -add[2]];
    if (i > 14) add = [add[0], -add[1], add[2]];
    steps.push({
        name: `Moving: ${i}`,
        positions: [
            {
                id: `${i}`,
                pose: {
                    position: add,
                },
            },
        ],
    });
}

console.log(steps);

const json = {
    files: [
        {
            id: "1",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/LX15D_U_body_T24_.stl",
            name: "LX15D_U_body(T24)",
            pose: { position: [40, 0, 0], orientation: [1, 0, 0, 0] },
        },
        {
            id: "2",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/LX15D_U_plate_cable_T24_.stl",
            name: "LX15D_U_plate_cable(T24)",
            pose: {
                position: [0, 0, -20],
                orientation: [6.123233995736766e-17, 1, 0, 0],
            },
        },
        {
            id: "3",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/LX15D_U_plate_cable_lock_T24_2.0_2.0_.stl",
            name: "LX15D_U_plate_cable_lock(T24,2.0,2.0)",
            pose: { position: [0, 0, -20], orientation: [1, 0, 0, 0] },
        },
        {
            id: "4",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/LX15D_U_plate_T24_.stl",
            name: "LX15D_U_plate(T24)",
            pose: { position: [0, 0, 20], orientation: [1, 0, 0, 0] },
        },

        {
            id: "5",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/Cylinder_M2x8_screw.stl",
            name: "Cylinder M2x8 screw",
            pose: {
                position: [37, 8, 40.75],
                orientation: [6.123233995736766e-17, 1, 0, 0],
            },
        },
        {
            id: "6",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/Cylinder_M2x8_screw.stl",
            name: "Cylinder M2x8 screw",
            pose: {
                position: [37, -8, 44.75],
                orientation: [6.123233995736766e-17, 1, 0, 0],
            },
        },
        {
            id: "7",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/Cylinder_M2x8_screw.stl",
            name: "Cylinder M2x8 screw",
            pose: {
                position: [32.025000000000006, -9, -44.75],
                orientation: [1, 0, 0, 0],
            },
        },
        {
            id: "8",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/Cylinder_M2x8_screw.stl",
            name: "Cylinder M2x8 screw",
            pose: {
                position: [32.025000000000006, -9, 44.75],
                orientation: [6.123233995736766e-17, 1, 0, 0],
            },
        },
        {
            id: "9",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/Cylinder_M2x8_screw.stl",
            name: "Cylinder M2x8 screw",
            pose: {
                position: [32.025000000000006, 9, -44.75],
                orientation: [1, 0, 0, 0],
            },
        },
        {
            id: "10",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/Cylinder_M2x8_screw.stl",
            name: "Cylinder M2x8 screw",
            pose: {
                position: [32.025000000000006, 9, 44.75],
                orientation: [6.123233995736766e-17, 1, 0, 0],
            },
        },
        {
            id: "11",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/Cylinder_M2x12_screw.stl",
            name: "Cylinder M2x12 screw",
            pose: {
                position: [37, -8, -48.75],
                orientation: [1, 0, 0, 0],
            },
        },
        {
            id: "12",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/Cylinder_M2x12_screw.stl",
            name: "Cylinder M2x12 screw",
            pose: { position: [37, 8, -48.75], orientation: [1, 0, 0, 0] },
        },
        {
            id: "13",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/M2_nut.stl",
            name: "M2 nut",
            pose: {
                position: [37, -8, -50.75],
                orientation: [1, 0, 0, 0],
            },
        },
        {
            id: "14",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/M2_nut.stl",
            name: "M2 nut",
            pose: {
                position: [37, -8, 50.75],
                orientation: [6.123233995736766e-17, 1, 0, 0],
            },
        },
        {
            id: "15",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/M2_nut.stl",
            name: "M2 nut",
            pose: { position: [37, 8, -50.75], orientation: [1, 0, 0, 0] },
        },
        {
            id: "16",
            file: "jsons/LX15D_U_[24.0_[8.0_4.0_0.0]_4.0_2.0_4.7_1.8_2.0_T24]_expand_0.0_/M2_nut.stl",
            name: "M2 nut",
            pose: {
                position: [37, 8, 50.75],
                orientation: [6.123233995736766e-17, 1, 0, 0],
            },
        },
    ],
    steps: steps,
};

// Load the uploaded object with file and step definitions
manual.loadJSON(json);
manual.getObjects().then((data) => {
    console.log(data);
});
