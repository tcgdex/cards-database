import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-56",
	localId: 56,

	// Card informations
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
	},

	hp: 160,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/56/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/56/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/56/high",
		},
	},

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Satoshi Shirai",

	abilities: [{
		id: 1318,
		type: AbilityType.TALENT,
		name: {
			en: "Raging Roar",
			fr: "Rugissement Enragé",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may attach 1 Darkness Energy from your discard pile to this Pokémon for each Prize card your opponent has taken.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez attacher 1 Énergie Darkness de votre pile de défausse à ce Pokémon pour chaque carte Récompense que votre adversaire a récupérée.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Dark Mountain",
			fr: "Montagne Obscure",
		},
		text: {
			en: "Discard the top 2 cards of your deck. This attack does 50 more damage for each Supporter card discarded in this way.",
			fr: "Défaussez les 2 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Supporter défaussée de cette façon.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
