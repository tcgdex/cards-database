import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-25",
	localId: 25,

	// Card informations
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 350,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/25/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/25/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/25/high",
		},
	},

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},

	abilities: [{
		id: 330,
		type: AbilityType.POKEBODY,
		name: {
			en: "Marvel Scale",
			fr: "Écaille spé.",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Milotic by your opponent's Pokémon LV.X.",
			fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Milobellus par les Pokémon LV.X de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Twister",
			fr: "Ouragan",
		},
		text: {
			en: "Flip 2 coins. If both are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez 2 pièces. Si ce sont 2 piles, cette attaque est sans effet. Pour chaque face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
