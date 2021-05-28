import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pomdrapi",
		en: "Flapple"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		fr: "Verpom",
		en: "Applin"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Chute de Pommes",
			en: "Apple Drop"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire. Si vous avez placé des marqueurs de dégâts de cette façon, mélangez dans votre deck ce Pokémon et toutes les cartes attachées.",
			en: "Once during your turn, you may put 2 damage counters on 1 of your opponent’s Pokémon. If you placed any damage counters in this way, shuffle this Pokémon and all attached cards into your deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Bombe Acide",
			en: "Acid Spray"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			en: "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon."
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card