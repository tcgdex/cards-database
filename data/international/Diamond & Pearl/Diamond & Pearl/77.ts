import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Clefairy",
		'fr-fr': "Melofée",
		'de-de': "Piepi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sing",
				'fr-fr': "Berceuse",
				'de-de': "Gesang"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Moon Impact",
				'fr-fr': "Impact lunaire",
				'de-de': "Mondeinschlag"
			},
			effect: {
				'en-us': "If Clefairy is evolved from Cleffa, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Si Melofée évolue de Melo, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn Piepi sich aus Pii entwickelt hat, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Thought to live with others on quiet mountains, it is popular for its adorable nature.",
		'fr-fr': "Tout le monde craque pour cet adorable Pokémon. Il vit en groupe dans le calme des montagnes."
	},

	thirdParty: {
		cardmarket: 277576,
		tcgplayer: 84356
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
