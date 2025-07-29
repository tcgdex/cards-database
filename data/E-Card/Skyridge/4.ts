import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Articuno",
		de: "Arktos"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Water Immunity",
				de: "Wasser-Immunität"
			},
			effect: {
				en: "You can't attach Water Energy cards from your hand to Articuno.",
				de: "Du kannst keine  Energiekarten aus deiner Hand an Arktos anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Freeze Solid",
				de: "Einfrieren"
			},
			effect: {
				en: "If there are any Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Articuno.",
				de: "Wenn mindestens eine  -Energiekarte in deinem Ablegestapel ist, wirf eine Münze. Lege bei \"Kopf\" eine davon an Arktos an."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Cyclone",
				de: "Eis-Zyklon"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your Pokémon in play. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff jedem Pokémon auf der gegnerischen Bank 10 Schadenspunkte zu. Bei 'Zahl' fügt dieser Angriff jedem deiner Pokémon im Spiel 10 Schadenspunkte zu. (Wende keine Schwäche oder Resistenz bei Pokémon auf der Bank an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275258
	}
}

export default card
