import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-5",
	localId: 5,

	// Card informations
	name: {
		en: "Magnezone",
		fr: "Magnezone",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 462,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/5/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/5/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/5/high",
		},
	},

	evolveFrom: {
		en: "Magneton",
		fr: "Magneton",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 1066,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Magnetic Search",
			fr: "Recherche magnétique",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Lightning or Metal Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Magnezone is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck un Pokémon Lightning ou Metal. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Magnézone est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Speed Shot",
			fr: "Coup d'boost",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crush Volt",
			fr: "Écras'volt",
		},
		text: {
			en: "Discard an Energy attached to Magnezone.",
			fr: "Défaussez une Énergie attachée à Magnézone.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
