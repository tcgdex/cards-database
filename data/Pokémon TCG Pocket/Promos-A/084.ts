import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Tapu Koko ex"
    },
    illustrator: "PLANETA Tsuji",
    category: "Pokemon",
    hp: 130,
    types: [
        "Lightning"
    ],
    stage: "Basic",
    suffix: "EX",
    attacks: [
        {
            cost: [
                "Lightning"
            ],
            name: {
                en: "Plasma Hurricane"
            },
            effect: {
                en: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon."
            },
            damage: "20"
        },
        {
            cost: [
                "Lightning",
                "Lightning",
                "Colorless"
            ],
            name: {
                en: "Mach Bolt"
            },
            damage: "90"
        }
    ],
    description: {
        en: null
    },
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    rarity: "Four Diamond",
    boosters: []
}

export default card
