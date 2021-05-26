import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Kricketune V",
		fr: "Mélokrik V"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Exciting Stage",
			fr: "Scène Palpitante"
		},

		effect: {
			en: "Once during your turn, you may draw cards until you have 3 cards in your hand. If this Pokémon is in the Active Spot, you may draw cards until you have 4 cards in your hand instead. You can’t use more than 1 Exciting Stage Ability each turn.",
			fr: "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu’à en avoir 3 en main. Si ce Pokémon est sur le Poste Actif, vous pouvez piocher des cartes jusqu’à en avoir 4 en main à la place. Vous ne pouvez pas utiliser plus d’un talent Scène Palpitante par tour."
		}
	}],

	attacks: [{
		name: {
			en: "X-Scissor",
			fr: "Plaie Croix"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 80 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 80 dégâts supplémentaires."
		},

		damage: "80+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card