import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Kartana"
    },
    illustrator: "Hasuno",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Grass"
            ],
            name: {
                en: "Thrash Metal"
            },
            damage: "40"
        }
    ],
    description: {
        en: "This Ultra Beast’s body, which is as thin as paper, is like a sharpened sword."
    },
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1,
    rarity: "One Diamond",
    boosters: []
}

export default card
