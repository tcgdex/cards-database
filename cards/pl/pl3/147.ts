import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-147",
	localId: 147,

	// Card informations
	name: {
		en: "Staraptor FB",
		fr: "Etouraptor ",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 398,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/147/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/147/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/147/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/147/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 697,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fast Call",
			fr: "Appel rapide",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Staraptor FB is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir une carte Supporter dans votre deck. Montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Etouraptor  est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Defog",
			fr: "Anti-brume",
		},
		text: {
			en: "Before doing damage, you may discard any Stadium card in play. If you do, this attack's base damage is 70 instead of 40.",
			fr: "Avant d'infliger des dégâts, vous pouvez défausser n'importe quelle carte Stade en jeu. Les dégâts de base de cette attaque sont alors de 70 au lieu de 40.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

