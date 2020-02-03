import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-10",
	localId: 10,

	// Card informations
	name: {
		en: "Ninjask",
		fr: "Ninjask",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 291,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/10/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/10/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/10/high.png",
		},
	},

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},

	abilities: [{
		id: 759,
		type: AbilityType.TALENT,
		name: {
			en: "Wing Buzz",
			fr: "Bourdonnement d'Aile",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may discard a card from your hand. If you do, discard the top card of your opponent's deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez défausser une carte de votre main. Dans ce cas, défaussez la carte du dessus du deck de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Afterimage Assault",
			fr: "Attaque Invisible",
		},
		text: {
			en: "Search your deck for up to 2 Ninjask and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 Ninjask dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

