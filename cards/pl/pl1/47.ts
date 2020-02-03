import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-47",
	localId: 47,

	// Card informations
	name: {
		en: "Crobat G",
		fr: "Nostenfert ",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/47/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/47/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/47/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/47/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 90,
		name: "Makoto Imai"
	},

	abilities: [{
		id: 569,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Flash Bite",
			fr: "Morsure flash",
		},
		text: {
			en: "Once during your turn, when you put Crobat from your hand onto your Bench, you may put 1 damage counter on 1 of your opponent's Pokémon.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Nostenfert  de votre main sur votre Banc, vous pouvez placer 1 marqueur de dégât sur 1 des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Toxic Fang",
			fr: "Croc toxik",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

