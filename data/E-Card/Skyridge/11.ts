import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Gyarados",
		de: "Garados"
	},

	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Flame Vapor",
				de: "Flammendampf"
			},
			effect: {
				en: "When you play Gyarados from your hand to evolve your Active Pokémon, you may flip 2 coins. For each heads, discard an Energy card attached to the Defending Pokémon.",
				de: "Wenn du Garados aus deiner Hand spielst, um dein aktives Pokémon zu entwickeln, kannst du 2 Münzen werfen. Lege für jeden geworfenen 'Kopf' eine an das verteidigende Pokémon angelegte Energiekarte auf den Ablagestapel deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Dragon's Vengeance",
				de: "Drachenrache"
			},

			effect: {
				en: "If Gyarados has 7 or more damage counters on it, this attack's base damage is 100.",
				de: "Verfügt Garados über 7 oder mehr Schadensmarken, beträgt der Basisschaden dieses Angriffs 100."
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275237,
		tcgplayer: 85988
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
