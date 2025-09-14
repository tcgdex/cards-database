import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Machamp",
		de: "Machomei"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Immunity",
				de: "Immunität"
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks done to Machamp.",
				de: "Verhindere alle Auswirkungen der Angriffe deines Gegners, die Machomei betreffen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Drag Off",
				de: "Wegzerren"
			},
			effect: {
				en: "Before doing damage, if your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon. If your opponent has no Benched Pokémon, ignore this effect.",
				de: "Falls dein Gegner mindestens ein Pokémon auf der Bank hat, bevor der Schaden zugefügt wird, wähle eines von diesen und tausche es mit dem verteidigenden Pokémon aus. Hat dein Gegner kein Pokémon auf seiner Bank, ignoriere diesen Effekt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Punch",
				de: "Hurrikan-Hieb"
			},
			effect: {
				en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275241,
		tcgplayer: 86959
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
