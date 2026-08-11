import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'de-de': "Vulnona",
		'it-it': "Ninetales"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'it-it': "Vulpix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lure",
				'fr-fr': "Leurre",
				'de-de': "Lockvogel",
				'it-it': "Esca"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon.",
				'fr-fr': "Si votre adversaire a des Pokémon sur le Banc, choisissez 1 d'entre eux et échangez-le avec le Pokémon Défenseur.",
				'de-de': "Falls Dein Gegner irgendwelche Pokémon auf der Bank hat, wähle eines von ihnen und tausce es mit dem verteidigenden Pokémon aus.",
				'it-it': "Se il tuo avversario ha dei Pokémon in Panchina, scegliene uno e scambialo con il Pokémon Difensore"
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Blast",
				'fr-fr': "Déflagration",
				'de-de': "Feuersturm",
				'it-it': "Fuocobomba"
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Ninetales in order to use this attack.",
				'fr-fr': "Défaussez 1 carte Énergie  attachée à Feunard pour pouvoir utiliser cette attaque.",
				'de-de': "Entferne eine auf Vulona abgelegte  Energiekarte, um diesen Angriff auszuführen",
				'it-it': "Scarta una carta Energia Fuoco assegnata a Ninetales per poter usare questo attacco."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273707,
				tcgplayer: 42352
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107008
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107008
			}
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],


	description: {
		'en-us': "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.",
		'fr-fr': "Très intelligent et rancunier. Attrapez-lui une de ses queues et il vous maudira pour 1000 ans.",
		'it-it': "Molto intelligente, ma anche molto vendicativo. Chi osa afferrare una delle sue numerose code viene punito con una maledizione che durerà 1.000 anni. LIV 32 N.38"
	}
}

export default card
