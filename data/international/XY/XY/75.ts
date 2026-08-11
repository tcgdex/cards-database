import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
		'es-es': "Inkay",
		'it-it': "Inkay",
		'pt-br': "Inkay",
		'de-de': "Iscalar"
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
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Puncture",
				'fr-fr': "Perforation",
				'es-es': "Pinchazo",
				'it-it': "Perforazione",
				'pt-br': "Perfuração",
				'de-de': "Durchdringen"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "Il danno di questo attacco non è influenzato dalla resistenza.",
				'pt-br': "Os danos deste ataque não são afetados por Resistência.",
				'de-de': "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
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

	description: {
		'en-us': "Opponents who stare at the flashing of the light-emitting spots on its body become dazed and lose their will to fight.",
	},

	thirdParty: {
		cardmarket: 281411,
		tcgplayer: 86284
	}
}

export default card
