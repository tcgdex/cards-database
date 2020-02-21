import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-48",
	localId: 48,

	// Card informations
	name: {
		en: "Sableye",
		fr: "Sableye",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/48/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/48/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/48/high",
		},
	},

	evolveFrom: {
		fr: "Ténéfix",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},

	abilities: [{
		id: 579,
		type: AbilityType.POKEBODY,
		name: {
			en: "Overeager",
			fr: "Enthousiaste",
		},
		text: {
			en: "If Sableye is your Active Pokémon at the beginning of the game, you go first. (If each player's Active Pokémon has the Overeager Poké-Body, this power does nothing.)",
			fr: "Si Ténéfix est votre Pokémon Actif au début de la partie, vous commencez. (Si le Pokémon Actif de chaque joueur possède le Poké-Body Enthousiaste, ce pouvoir est sans effet).",
		}
	}],

	attacks: [{
		name: {
			en: "Impersonate",
			fr: "Personnifier",
		},
		text: {
			en: "Search your deck for a Supporter card and discard it. Shuffle your deck afterward. Then, use the effect of that card as the effect of this attack.",
			fr: "Choisissez dans votre deck une carte Supporter et défaussez-la. Ensuite, mélangez votre deck. Puis, utilisez l'effet de cette carte comme l'effet de cette attaque.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Overconfident",
			fr: "Plein de zèle",
		},
		text: {
			en: "If the Defending Pokémon has fewer remaining HP than Sableye, this attack's base damage is 40.",
			fr: "Si le Pokémon Défenseur possède moins de PV que Ténéfix, les dégâts de base de cette attaque sont de 40.",
		},
		damage: 10
	}],



	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
