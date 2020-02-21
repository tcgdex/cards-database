import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV76",
	localId: "SV76",

	// Card informations
	name: {
		en: "Sylveon-GX",
		fr: "Nymphali-GX",
	},

	hp: 200,

	type: [
		Type.FAIRY,
	],

	dexId: 700,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV76/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV76/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV76/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Magical Ribbon",
			fr: "Ruban Magique",
		},
		text: {
			en: "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 3 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 110
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Plea-GX",
			fr: "Supplique-GX",
		},
		text: {
			en: "Put 2 of your opponent's Benched Pokémon and all cards attached to them into your opponent's hand. (You can't use more than 1 GX attack in a game.)",
			fr: "Placez 2 des Pokémon de Banc de votre adversaire et toutes les cartes qui leur sont attachées dans la main de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
