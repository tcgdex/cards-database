import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-108",
	localId: 108,

	// Card informations
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 160,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/108/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/108/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/108/high.png",
		},
	},

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocodil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},

	abilities: [{
		id: 1035,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Rain Dance",
			fr: "Danse pluie",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Water Pokémon. This power can't be used if Feraligatr is affected by a Special Condition.",
			fr: "Autant de fois que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water de votre main à l’un de vos Pokémon Water. Ce pouvoir ne peut pas être utilisé si Aligatueur est affecté par un État spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Hydro Crunch",
			fr: "Hydro-machouille",
		},
		text: {
			en: "Does 60 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
			fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Défenseur.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card

