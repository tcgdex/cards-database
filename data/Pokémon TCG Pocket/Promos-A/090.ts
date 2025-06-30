import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Togedemaru"
    },
    illustrator: "sowsow",
    category: "Pokemon",
    hp: 80,
    types: [
        "Metal"
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Metal",
                "Metal"
            ],
            name: {
                en: "Bristling Spikes"
            },
            effect: {
                en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 30 damage to the Attacking Pokémon."
            },
            damage: "30"
        }
    ],
    description: {
        en: "With the long hairs on its back, this Pokémon takes in electricity from other electric Pokémon. It stores what it absorbs in an electric sac."
    },
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1,
    rarity: "Three Diamond",
    boosters: []
}

export default card
