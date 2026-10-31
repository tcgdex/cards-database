import { Card } from "../../../interfaces"
import Set from "../Play! Pokémon Prize Pack Series 09"

const card: Card = {
	dexId: [570],
	set: Set,

	name: {
		en: "N's Zorua",
		fr: "Zorua de N",
		es: "Zorua de N",
		de: "Ns Zorua",
		it: "Zorua di N",
		pt: "Zorua do N",
		'es-mx': "Zorua de N"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			de: "Kratzer",
			it: "Graffio",
			pt: "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Jiro Sasumo",

	variants: [
		{
			type: "holo",
			stamp: ["player-rewards-program"],
		},
	],
}

export default card
