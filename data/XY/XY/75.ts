import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Inkay",
		fr: "Sepiatop",
		es: "Inkay",
		it: "Inkay",
		pt: "Inkay",
		de: "Iscalar"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		686,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Puncture",
				fr: "Perforation",
				es: "Pinchazo",
				it: "Perforazione",
				pt: "Perfuração",
				de: "Durchdringen"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "Il danno di questo attacco non è influenzato dalla resistenza.",
				pt: "Os danos deste ataque não são afetados por Resistência.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281411,
		tcgplayer: 86284
	}
}

export default card
