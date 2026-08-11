import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Typhlosion",
		'fr-fr': "Typhlosion"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [157],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Quilava"
	},

	description: {
		'en-us': "If its rage peaks, it becomes so hot that anything\nthat touches it will instantly go up in flames.",
		'fr-fr': "Quand sa colère atteint son paroxysme son corps devient si chaud que tout ce qu'il touche s'enflamme instantanément."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fire Breath",
			'fr-fr': "Haleine de Feu"
		},

		effect: {
			'en-us': "Once during your turn, you may make your opponent's Active Pokémon Burned.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Magma Punch",
			'fr-fr': "Poing Magma"
		},

		damage: 60,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card