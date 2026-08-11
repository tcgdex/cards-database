import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tyranitar",
		'fr-fr': "Tyranocif"
	},

	illustrator: "Hasuno",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [248],
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Pupitar"
	},

	description: {
		'en-us': "Extremely strong, it can change the landscape.\nIt is so insolent that it doesn't care about others.",
		'fr-fr': "Ce Pokémon est si fort qu'il est capable de modifier la topographie d'un lieu. Il ne se préoccupe pas des autres."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Energy Plunder",
			'fr-fr': "Pillage d'Énergie"
		},

		effect: {
			'en-us': "Once during your turn, you may move all {D} Energy from each of your Pokémon to this Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez déplacer toute l'Énergie {D} de chacun de vos Pokémon vers ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Buster Tail",
			'fr-fr': "Queue Destructrice"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["ho-oh"]
}

export default card