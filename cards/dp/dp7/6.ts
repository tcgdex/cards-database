import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-6",
	localId: 6,

	// Card informations
	name: {
		en: "Magnezone",
		fr: "Magnezone",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 462,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/6/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/6/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/6/high.png",
		},
	},

	evolveFrom: {
		en: "Magneton",
		fr: "Magneton",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 106,
		name: "Tomoaki Imakuni"
	},

	abilities: [{
		id: 561,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Super Connectivity",
			fr: "Super connection",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your discard pile for a Lightning or Metal Energy card and attach it to your Active Pokémon. Then, put 1 damage counter on that Pokémon. This power can't be used if Magnezone is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre pile de défausse une carte Énergie Lightning ou Metal et l'attacher à votre Pokémon Actif. Ensuite, placez 1 marqueur de dégât sur ce Pokémon. Ce pouvoir ne peut pas être utilisé si Magnézone est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gyro Ball",
			fr: "Gyroballe",
		},
		text: {
			en: "You may switch Magnezone with 1 of your Benched Pokémon. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Vous pouvez échanger Magnézone avec 1 des Pokémon de votre Banc. Votre adversaire échange alors le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

