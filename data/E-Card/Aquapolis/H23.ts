import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		208,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Onix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Earth Rift",
				fr: "Faille terreste"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.) Then, flip a coin. If tails, this attack can't be used during your next turn.",
				fr: "Cette attaque inflige 10 dégâts à tous les Pokémon du Banc de votre adversaire. (N'appliquez pas la Faiblesse et la Résistance aux Pokémon du Banc.) Lancez ensuite une pièce. Si c'est pile, cette attaque ne peut pas être utilisée à nouveau durant votre prochain tour."
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Smash",
				fr: "Éclate-fer"
			},
			effect: {
				en: "Flip 2 coins. If both are heads, this attack does 50 damage plus 20 more damage. If both are tails, this attack does nothing. If 1 is heads and 1 is tails, this attack just does 50 damage.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 faces, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires. Si vous obtenez 2 piles, cette attaque ne fait rien. Si l'une est face et l'autre est pile, cette attaque n'inflige que 50 dégâts."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
