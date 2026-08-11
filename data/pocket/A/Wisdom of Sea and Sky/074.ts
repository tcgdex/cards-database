import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Slowking",
		'fr-fr': "Roigada"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [199],
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Slowpoke"
	},

	description: {
		'en-us': "When its head was bitten, toxins entered Slowpoke's\nhead and unlocked an extraordinary power.",
		'fr-fr': "Quand la tête de Ramoloss a été mordue, des toxines l'ont pénétrée et ont éveillé en lui des pouvoirs immenses."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko"
		},

		damage: 10,
		cost: ["Psychic", "Colorless"],

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card