import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-95",
	localId: 95,

	// Card informations
	name: {
		en: "Shedinja",
		fr: "Munja",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 292,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/95/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/95/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/95/high.png",
		},
	},

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 1256,
		type: AbilityType.TALENT,
		name: {
			en: "Vessel of Life",
			fr: "Vaisseau Vital",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard all cards attached to this Pokémon and attach it to 1 of your Pokémon as a Pokémon Tool card. When the Pokémon this card is attached to is Knocked Out, your opponent takes 1 fewer Prize card.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser toutes les cartes attachées à ce Pokémon et l’attacher à l’un de vos Pokémon comme carte Outil Pokémon. Lorsque le Pokémon auquel cette carte est attachée est mis K.O., votre adversaire récupère une carte Récompense de moins.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Haunt",
			fr: "Hanter",
		},
		text: {
			en: "Put 3 damage counters on your opponent's Active Pokémon.",
			fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
		},
	}],





	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

