import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'de-de': "Yanma"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [193],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sonicboom",
				'fr-fr': "Sonicboom",
				'de-de': "Ultraschall"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Baton Pass",
				'fr-fr': "Relais",
				'de-de': "Stafette"
			},
			effect: {
				'en-us': "You may switch Yanma with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Yanma as you like to the new Active Pokémon.",
				'fr-fr': "Vous pouvez échanger Yanma avec 1 de vos Pokémon de Banc. Déplacez alors autant de cartes Énergie attachées à Yanma que vous le voulez sur le nouveau Pokémon Actif.",
				'de-de': "Du kannst Yanma gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, kannst du eine beliebige Anzahl an Yanma angelegter Energiekarten entfernen und an das neue Aktive Pokémon anlegen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It can hover in one spot by flapping its wings at high speed. It flits about to guard its territory."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90687,
				cardmarket: 278691
			}
		},
	],

}

export default card
