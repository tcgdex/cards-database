import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Greedent"
    },
    illustrator: "HYOGONOSUKE",
    category: "Pokemon",
    hp: 120,
    types: [
        "Colorless"
    ],
    stage: "Stage1",
    evolveFrom: {
        en: "Skwovet"
    },
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Enhanced Fang"
            },
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage."
            },
            damage: "50+"
        }
    ],
    description: {
        en: "This Pokémon makes off with heaps of fallen berries by wrapping them in its tail, which is roughly twice the length of its body."
    },
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2,
    rarity: "Three Diamond",
    boosters: []
}

export default card
