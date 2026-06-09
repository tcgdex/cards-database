import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Omanyte",
		fr: "Amonita",
		de: "Amonitas"
	},

	illustrator: "Kenkichi Toyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Mysterious Fossil",
		fr: "Mystérieux Fossile"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Ancient Tentacles",
				fr: "Tentacules anciennes",
				de: "Uralte Tentakel"
			},
			effect: {
				en: "Damage done to your opponent's Pokémon by your Omanyte, Omastar, Kabuto, Kabutops, or Kabutops ex isn't affected by Resistance.",
				fr: "Les dégâts infligés aux Pokémon de votre adversaire par votre Amonita, Amonistar, Kabuto, Kabutops ou Kabutops ex ne sont pas affectés par la Résistance.",
				de: "Schaden, der den Pokémon deines Gegners durch Amonitas, Amoroso, Kabuto, Kabutops oder Kabutops ex zugefügt wird, wird durch Resistenzen nicht verringert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Rising Lunge",
				fr: "Botte secrète",
				de: "Aufwärtsstoß"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276937,
		tcgplayer: 87858
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
