import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 40,

	types: [
		"Lightning",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Levitate",
				fr: "Lévitation",
				es: "",
				it: "",
				pt: "",
				de: ""
			},
			effect: {
				en: "If this Pokémon has any Energy attached, it has no Retreat Cost.",
				fr: "Si de l’Énergie est attachée à ce Pokémon, il n’a pas de Coût de Retraite.",
				es: "",
				it: "",
				pt: "",
				de: ""
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tiny Charge",
				fr: "Décharge Mineure",
				es: "Carga Diminuta",
				it: "Sottocarica Minuscola",
				pt: "Carga Pequenina",
				de: "Mini-Stromstoß"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
