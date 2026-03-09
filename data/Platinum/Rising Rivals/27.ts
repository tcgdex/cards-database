import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Mamoswine GL",
		fr: "Mammochon  Niv. 61",
		de: "Mamutel GL"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		473,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Icy Aura",
				fr: "Aura glaciale",
				de: "Eisige Aura"
			},
			effect: {
				en: "As long as Mamoswine is your Active Pokémon, put 1 damage counter on each Active Pokémon (excluding Water Pokémon) (both yours and your opponent's) between turns.",
				fr: "Tant que Mammochon  est votre Pokémon Actif, placez 1 marqueur de dégât sur chaque Pokémon Actif (Pokémon Water exclus) (les vôtres et ceux de votre adversaire) entre deux tours.",
				de: "Solange Mamutel GL dein Aktives Pokémon ist, lege zwischen den Zügen 1 Schadensmarke auf jedes Aktive Pokémon (außer -Pokémon) (deine und die deines Gegners)."
			},
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
				en: "Avalanche",
				fr: "Avalanche",
				de: "Lawine"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

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
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		tcgplayer: 87142
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
