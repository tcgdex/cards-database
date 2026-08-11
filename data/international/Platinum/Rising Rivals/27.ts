import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Mamoswine GL",
		'fr-fr': "Mammochon  Niv. 61",
		'de-de': "Mamutel GL"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [473],

	hp: 100,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Icy Aura",
				'fr-fr': "Aura glaciale",
				'de-de': "Eisige Aura"
			},
			effect: {
				'en-us': "As long as Mamoswine GL is your Active Pokémon, put 1 damage counter on each Active Pokémon (excluding Water Pokémon) (both yours and your opponent's) between turns.",
				'fr-fr': "Tant que Mammochon  est votre Pokémon Actif, placez 1 marqueur de dégât sur chaque Pokémon Actif (Pokémon Water exclus) (les vôtres et ceux de votre adversaire) entre deux tours.",
				'de-de': "Solange Mamutel GL dein Aktives Pokémon ist, lege zwischen den Zügen 1 Schadensmarke auf jedes Aktive Pokémon (außer -Pokémon) (deine und die deines Gegners)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Avalanche",
				'fr-fr': "Avalanche",
				'de-de': "Lawine"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 4,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278601,
				tcgplayer: 87142
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278601,
				tcgplayer: 87142
			}
		},
	],

}

export default card
