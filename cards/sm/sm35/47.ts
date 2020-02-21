import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-47",
	localId: 47,

	// Card informations
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 442,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/47/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/47/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 1215,
		type: AbilityType.TALENT,
		name: {
			en: "Cursed Whirlpool",
			fr: "Tourbillon Maudit",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Active Pokémon can't retreat.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Cursed Drop",
			fr: "Chute Maudite",
		},
		text: {
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	}],





	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
