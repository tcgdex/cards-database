import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Probopass",
		de: "Voluminas"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		476,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Nosepass",
		de: "Nasgnet"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Slide",
				de: "Steinhagel"
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				de: "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Nose",
				de: "Dreifachnase"
			},
			effect: {
				en: "Flip 3 coins. This attack does 50 damage plus 20 more damage for each heads.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 50 Schadenspunkte plus 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	description: {
		en: "It exudes strong magnetium from all cover. It controls three small units called Mini-Noses.",
		de: "Es gibt starken Magnetismus ab. Es steuert drei kleine Einheiten, die sich Mininasen nennen."
	},

	retreat: 3,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278405,
				tcgplayer: 88376
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 278405,
				tcgplayer: 88376
			}
		},
	],
}

export default card
