import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm10/119/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/119/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/119/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/119/high.png",
		},
	},

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



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

