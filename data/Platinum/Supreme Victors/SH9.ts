import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Yanma",
		de: "Yanma"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		193,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sonicboom",
				de: "Ultraschall"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				de: "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
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
				en: "Baton Pass",
				de: "Stafette"
			},
			effect: {
				en: "You may switch Yanma with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Yanma as you like to the new Active Pokémon.",
				de: "Du kannst Yanma gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, kannst du eine beliebige Anzahl an Yanma angelegter Energiekarten entfernen und an das neue Aktive Pokémon anlegen."
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




}

export default card
