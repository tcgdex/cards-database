import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Xurkitree"
    },
    illustrator: "Shin Nagasawa",
    category: "Pokemon",
    hp: 100,
    types: [
        "Lightning"
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Lightning",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Electronica"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Confused."
            },
            damage: "60"
        }
    ],
    description: {
        en: "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives."
    },
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2,
    rarity: "One Diamond",
    boosters: []
}

export default card
