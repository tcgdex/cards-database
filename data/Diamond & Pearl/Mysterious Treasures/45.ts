import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Dewgong",
		fr: "Lamantine LV.36",
		de: "Jugong"
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
		en: "Seel",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cold Fat",
				fr: "Graisse froide",
				de: "Fettschicht"
			},
			effect: {
				en: "As long as Dewgong is Asleep, any damage done to Dewgong by attacks is reduced by 40 (after applying Weakness and Resistance).",
				fr: "Tant que Lamantine est Endormi, tous dégâts qui lui sont infligés par des attaques sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
				de: "Solange Jugong schläft, wird Schaden, der Jugong durch Angriffe zugefügt wird, um 40 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "Collapse",
				fr: "Effondrement",
				de: "Kollaps"
			},
			effect: {
				en: "Dewgong is now Asleep.",
				fr: "Lamantine est maintenant Endormi.",
				de: "Jugong schläft jetzt."
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

	description: {
		fr: "Son corps est couvert d'un grand manteau blanc qui, dans la neige, le dissimule aux yeux des prédateurs."
	},

	thirdParty: {
		cardmarket: 277674
	}
}

export default card
