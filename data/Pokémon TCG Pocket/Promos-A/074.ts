import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
    set: Set,
    name: {
        en: "Zeraora"
    },
    illustrator: "GIDORA",
    category: "Pokemon",
    hp: 90,
    types: [
        "Lightning"
    ],
    stage: "Basic",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Thunderclap Flash"
            },
            effect: {
                en: "At the end of your first turn, take a {L} Energy from your Energy Zone and attach it to this Pokémon."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Lightning",
                "Lightning"
            ],
            name: {
                en: "Lightning Claw"
            },
            damage: "50"
        }
    ],
    description: {
        en: "It electrifies its claws and tears its opponents apart with them. Even if they dodge its attack, they’ll be electrocuted by the flying sparks."
    },
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    rarity: "One Star",
    boosters: []
}

export default card
