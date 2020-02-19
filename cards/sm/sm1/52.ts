import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-52",
	localId: 52,

	// Card informations
	name: {
		en: "Vikavolt",
		fr: "Lucanon",
	},

	hp: 150,

	type: [
		Type.LIGHTNING,
	],

	dexId: 738,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/52/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/52/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/52/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/52/high.png",
		},
	},

	evolveFrom: {
		en: "Charjabug",
		fr: "Chrysapile",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},

	abilities: [{
		id: 1156,
		type: AbilityType.TALENT,
		name: {
			en: "Strong Charge",
			fr: "Charge Puissante",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Grass Energy card and a Lightning Energy card and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Énergie Grass et une carte Énergie Lightning dans votre deck puis les attacher à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electro Cannon",
			fr: "Canon Élek",
		},
		text: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

