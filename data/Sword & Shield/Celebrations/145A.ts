import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [445],
	set: Set,

	name: {
		en: "Garchomp C LV.X",
		fr: "Carchacrok C NIV.X"
	},

	illustrator: "Shizurow",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "LEVEL-UP",

	abilities: [{
		type: "Poke-POWER",

		name: {
			en: "Healing Breath",
			fr: "Haleine guérisseuse"
		},

		effect: {
			en: "Once during your turn (before your attack), when you put Garchomp C LV.X from your hand onto your Active Garchomp C, you may remove all damage counters from each of your Pokémon SP.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Carchacrok  NIV.X de votre main sur votre Carchacrok  Actif, vous pouvez retirer tous ses marqueurs de dégât à chacun de vos Pokémon SP."
		}
	}],

	attacks: [{
		name: {
			en: "Dragon Rush",
			fr: "Dracocharge"
		},

		effect: {
			en: "Discard 2 Energy attached to Garchomp C. Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Garchomp C can't use Dragon Rush during your next turn.",
			fr: "Défaussez 2 Énergies attachées à Carchacrok . Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Carchacrok  ne peut pas utiliser Dracocharge lors de votre prochain tour."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Colorless",
		value: "×2"
	}],

	retreat: 0,
	suffix: "SP",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
