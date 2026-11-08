import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hitmontop",
		'fr-fr': "Kapoera"
	},

	illustrator: "Hisao Nakamura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [237],
	hp: 80,
	types: ["Fighting"],

	description: {
		'en-us': "It launches kicks while spinning. If it spins at high\nspeed, it may bore its way into the ground.",
		'fr-fr': "Il assène des coups de pied tout en tournant sur lui-même. Il va parfois si vite qu'il commence à s'enfoncer dans le sol."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Piercing Spin",
			'fr-fr': "Pirouette Perçante"
		},

		damage: 20,
		cost: ["Fighting"],

		effect: {
			'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à un des Pokémon de Banc de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh", "lugia"]
}

export default card