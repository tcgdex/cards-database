import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Milotic",
		'fr-fr': "Milobellus",
		'de-de': "Milotic"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [350],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Feebas",
		'fr-fr': "Barpau"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Aqua Mirage",
				'fr-fr': "Aqua-mirage",
				'de-de': "Aqua-Trugbild"
			},
			effect: {
				'en-us': "If you have no cards in your hand, prevent all damage done to Milotic by attacks from your opponent's Pokémon.",
				'fr-fr': "Si vous n'avez plus de cartes en main, prévenez tous les dégâts infligés à Milobellus par les attaques des Pokémon de votre adversaire.",
				'de-de': "Solange du keine Handkarten hast, verhindere allen Schaden, der Milotic durch Angriffe von Pokémon deines Gegners zugefügt würde."
			}
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
				'en-us': "Dwindling Wave",
				'fr-fr': "Vague diminutrice",
				'de-de': "Schwindende Welle"
			},
			effect: {
				'en-us': "Does 80 damage minus 10 damage for each damage counter on Milotic.",
				'fr-fr': "Inflige 80 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Milobellus.",
				'de-de': "Dieser Angriff fügt 80 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf Milotic zu."
			},
			damage: "80-",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its lovely scales are described as rainbow colored. They change color depending on the viewing angle."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87456,
				cardmarket: 278689
			}
		},
	],

}

export default card
