import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Tyranitar",
		fr: "Tyranocif"
	},

	illustrator: "Saboteri",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [248],
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Pupitar"
	},

	description: {
		en: "Extremely strong, it can change the landscape.\nIt is so insolent that it doesn't care about others.",
		fr: "Ce Pokémon est si fort qu'il est capable de modifier la topographie d'un lieu. Il ne se préoccupe pas des autres."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Energy Plunder",
			fr: "Pillage d'Énergie"
		},

		effect: {
			en: "Once during your turn, you may move all {D} Energy from each of your Pokémon to this Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez déplacer toute l'Énergie {D} de chacun de vos Pokémon vers ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Buster Tail",
			fr: "Queue Destructrice"
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