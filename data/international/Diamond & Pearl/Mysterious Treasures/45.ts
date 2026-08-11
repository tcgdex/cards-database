import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Dewgong",
		'fr-fr': "Lamantine LV.36",
		'de-de': "Jugong"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		87,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Seel",
		'fr-fr': "Otaria"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Cold Fat",
				'fr-fr': "Graisse froide",
				'de-de': "Fettschicht"
			},
			effect: {
				'en-us': "As long as Dewgong is Asleep, any damage done to Dewgong by attacks is reduced by 40 (after applying Weakness and Resistance).",
				'fr-fr': "Tant que Lamantine est Endormi, tous dégâts qui lui sont infligés par des attaques sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Solange Jugong schläft, wird Schaden, der Jugong durch Angriffe zugefügt wird, um 40 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Collapse",
				'fr-fr': "Effondrement",
				'de-de': "Kollaps"
			},
			effect: {
				'en-us': "Dewgong is now Asleep.",
				'fr-fr': "Lamantine est maintenant Endormi.",
				'de-de': "Jugong schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "In snow, the pure white coat covering its body obscures it from predators.",
		'fr-fr': "Son corps est couvert d'un grand manteau blanc qui, dans la neige, le dissimule aux yeux des prédateurs."
	},

	thirdParty: {
		cardmarket: 277674,
		tcgplayer: 84790
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
