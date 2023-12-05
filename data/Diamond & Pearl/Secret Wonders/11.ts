import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
		de: "Papungha"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		189,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiploom",
		fr: "Floravol",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cotton Spore",
				fr: "Spore coton",
				de: "Cotton Spore"
			},
			effect: {
				en: "Whenever Jumpluff would be damaged by your opponent's attack, flip a coin. If heads, prevent all damage done to Jumpluff by that attack.",
				fr: "Lorsqu'une attaque de votre adversaire inflige des dégâts à Cotovol, lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Cotovol par cette attaque.",
				de: "Whenever Jumpluff would be damaged by your opponent's attack, flip a coin. If heads, prevent all damage done to Jumpluff by that attack."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Cottonweed Punch",
				fr: "Poing de coton",
				de: "Cottonweed Punch"
			},
			effect: {
				en: "Flip 2 coins. Choose 1 of your opponent's Pokémon. For each heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez 2 pièces. Choisissez 1 des Pokémon de votre adversaire. Pour chaque face, cette attaque lui infige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.)",
				de: "Flip 2 coins. Choose 1 of your opponent's Pokémon. For each heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

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
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
