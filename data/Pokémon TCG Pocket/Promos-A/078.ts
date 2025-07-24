import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Dawn Wings Necrozma"
    },
    illustrator: "nagimiso",
    category: "Pokemon",
    hp: 110,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Psychic",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Psychobilly"
            },
            effect: {
                en: "This Pokémon also does 30 damage to itself."
            },
            damage: "100"
        }
    ],
    description: {
        en: "Lunala no longer has a will of its own. Now under the control of Necrozma, it continuously expels all of its energy."
    },
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2,
    rarity: "Three Diamond",
    boosters: []
}

export default card
