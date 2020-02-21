import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-3",
	localId: 3,

	// Card informations
	name: {
		en: "Darkrai",
		fr: "Darkrai",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 491,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/3/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/3/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 590,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Darkness Shade",
			fr: "Ombre obscurité",
		},
		text: {
			en: "Once during your turn, when you put Darkrai from your hand onto your Bench, you may choose 1 of the Defending Pokémon. That Pokémon is now Asleep.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Darkrai de votre main sur votre Banc, vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Endormi.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Dark Slumber",
			fr: "Sommeil obscur",
		},
		text: {
			en: "At the end of your opponent's next turn, the Defending Pokémon is now Asleep.",
			fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Resolve",
			fr: "Solution obscure",
		},
		text: {
			en: "If the Defending Pokémon is Asleep, remove 4 damage counters from Darkrai.",
			fr: "Si le Pokémon Défenseur est Endormi, retirez à Darkrai 4 marqueurs de dégât.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
