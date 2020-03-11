import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-119",
	localId: 119,

	// Card informations
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 687,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/119/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/119/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/119/high",
		},
	},

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yusuke Ohmura",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Hypnotic Reign",
			fr: "Règne Hypnotique",
		},
		text: {
			en: "Your opponent reveals their hand. You may discard a Pokémon you find there and use one of that Pokémon's non-GX attacks as this attack.",
			fr: "Votre adversaire dévoile sa main. Vous pouvez défausser un Pokémon que vous y trouvez et utiliser l’une des attaques non GX de ce Pokémon en tant que cette attaque.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Pressure",
			fr: "Pression Ténébreuse",
		},
		text: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
