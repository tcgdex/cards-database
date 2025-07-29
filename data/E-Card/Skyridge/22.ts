import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Nidoqueen",
		de: "Nidoqueen"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidorina",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolution Helper",
				de: "Evolutions-Helfer"
			},
			effect: {
				en: "Once during your turn (before you attack) if Nidoqueen is on your bench, you may search your deck for a card that evolves from your Active Pokémon and attach it to your Active Pokémon. (this counts as evolving that Pokémon) Shuffle your deck afterward.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Nidoqueen auf deiner Bank ist, dein Deck nach einer Karte durchsuchen, die sich aus deinem aktiven Pokémon entwickelt, und sie an dein aktives Pokémon anlegen. (Dies zählt als Entwickeln dieses Pokémon.) Mische dein Deck danach."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Claw",
				de: "Doppelkralle"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte pro geworfenem \"Kopf\" zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275231
	}
}

export default card
