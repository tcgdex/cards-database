import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Eevee"
    },
    illustrator: "nisimono",
    category: "Pokemon",
    hp: 60,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Colorless"
            ],
            name: {
                en: "Tackle"
            },
            damage: "20"
        }
    ],
    description: {
        en: "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment."
    },
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    rarity: "Three Diamond",
    boosters: []
}

export default card
