import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Stakataka"
    },
    illustrator: "Shin Nagasawa",
    category: "Pokemon",
    hp: 110,
    types: [
        "Metal"
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Metal",
                "Colorless"
            ],
            name: {
                en: "Brass Rock"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon takes -20 damage from attacks."
            },
            damage: "40"
        }
    ],
    description: {
        en: "It appeared from an Ultra Wormhole. Each one appears to be made up of many life-forms stacked one on top of each other."
    },
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3,
    rarity: "One Diamond",
    boosters: []
}

export default card
