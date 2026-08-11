import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [445],
	set: Set,

	name: {
		'en-us': "Garchomp C LV.X",
		'fr-fr': "Carchacrok C NIV.X"
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
			'en-us': "Healing Breath",
			'fr-fr': "Haleine guérisseuse"
		},

		effect: {
			'en-us': "Once during your turn (before your attack), when you put Garchomp C LV.X from your hand onto your Active Garchomp C, you may remove all damage counters from each of your Pokémon SP.",
			'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Carchacrok  NIV.X de votre main sur votre Carchacrok  Actif, vous pouvez retirer tous ses marqueurs de dégât à chacun de vos Pokémon SP."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Dragon Rush",
			'fr-fr': "Dracocharge"
		},

		effect: {
			'en-us': "Discard 2 Energy attached to Garchomp C. Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Garchomp C can't use Dragon Rush during your next turn.",
			'fr-fr': "Défaussez 2 Énergies attachées à Carchacrok . Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Carchacrok  ne peut pas utiliser Dracocharge lors de votre prochain tour."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Colorless",
		value: "×2"
	}],

	retreat: 0,
	suffix: "SP",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576788,
				tcgplayer: 250335
			}
		},
	],
}

export default card
