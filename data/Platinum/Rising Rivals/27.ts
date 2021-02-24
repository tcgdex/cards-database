import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Mamoswine GL",
		fr: "Mammochon  Niv. 61",
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
			},
			effect: {
				en: "As long as Mamoswine is your Active Pokémon, put 1 damage counter on each Active Pokémon (excluding Water Pokémon) (both yours and your opponent's) between turns.",
				fr: "Tant que Mammochon  est votre Pokémon Actif, placez 1 marqueur de dégât sur chaque Pokémon Actif (Pokémon Water exclus) (les vôtres et ceux de votre adversaire) entre deux tours.",
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
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
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



}

export default card
