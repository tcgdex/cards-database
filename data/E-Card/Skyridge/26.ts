import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Poliwrath",
		de: "Quappo"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Poliwhirl",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Strange Spiral",
				de: "Seltsame Spirale"
			},
			effect: {
				en: "Once during your turn (before you attack), if Poliwrath if your Active Pokémon, you may discard a basic Energy card attached to Poliwrath. If you do, the Defending Pokémon is now Confused. This power can't be used if Poliwrath is affected by a Special Condition.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Quappo dein aktives Pokémon ist, eine an Quappo angelegte Basis-Energiekarte auf deinen Ablagestapel legen. Falls du dies tust, ist das verteidigende Pokémon jetzt verwirrt. Diese Fähigkeit kann nicht verwendet werden, falls Quappo von einem speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Spiral Punch",
				de: "Spiral-Hieb"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 40 damage plus 20 more damage for each heads.",
				de: "Wirf eine Münze, bis du 'Zahl' wirfst. Dieser Angriff fügt 40 Schadenspunkte plus 20 weitere Schadenspunkte plus geworfenem 'Kopf' zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275232,
		tcgplayer: 88273
	}
}

export default card
