import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Nidorino",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Horn",
				fr: "Corne empoisonnée"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rolling Thunder",
				fr: "Roulement de tonnerre"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon du Banc de votre adversaire. Si c'est pile, cette attaque inflige 10 dégâts à chacun de Pokémon de votre Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	abilities: [{
		name: {
			fr: "Type de cristal"
		},

		effect: {
			fr: "À chaque fois que vous attachez une carte Énergie de base , , ou  de votre main à Nidoking, le type de Nidoking (sa couleur) devient identique au type de carte Énergie jusqu'à la fin du tour."
		},

		type: "Poke-BODY"
	}]
}

export default card
