import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Flapple",
		fr: "Pomdrapi"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Applin",
		fr: "Verpom"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Apple Drop",
			fr: "Chute de Pommes"
		},

		effect: {
			en: "Once during your turn, you may put 2 damage counters on 1 of your opponent’s Pokémon. If you placed any damage counters in this way, shuffle this Pokémon and all attached cards into your deck.",
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire. Si vous avez placé des marqueurs de dégâts de cette façon, mélangez dans votre deck ce Pokémon et toutes les cartes attachées."
		}
	}],

	attacks: [{
		name: {
			en: "Acid Spray",
			fr: "Bombe Acide"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent’s Active Pokémon.",
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire."
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card