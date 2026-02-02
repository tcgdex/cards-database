import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [529],
	set: Set,

	name: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur",
		de: "Rotomurf"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Hone Claws",
			fr: "Aiguisage"
		},
		effect: {
			en: "During your next turn, each of this Pokémon's attacks does 30 more damage (before applying Weakness and Ressistance).",
			fr: "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance)."
		}
	}, {
		cost: [
			"Fighting",
		],
		name: {
			en: "Scratch",
			fr: "Griffe"
		},
		damage: 10
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	resistances: [{
		type: "Lightning",
		value: "-20"
	}],

	description: {
		en: "It can dig through the ground at a speed of 30 mph. It could give a car running aboveground a good race."
	},

	retreat: 2,
}

export default card
