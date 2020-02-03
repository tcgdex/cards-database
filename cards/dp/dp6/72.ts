import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-72",
	localId: 72,

	// Card informations
	name: {
		en: "Swalot",
		fr: "Avaltout",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 317,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/72/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/72/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/72/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/72/high.png",
		},
	},

	evolveFrom: {
		en: "Gulpin",
		fr: "Schluppuck",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Swallow Up",
			fr: "Engloutir",
		},
		text: {
			en: "Before doing damage, count the remaining HP of the Defending Pokémon and Swalot. If the Defending Pokémon has fewer remaining HP than Swalot's, this attack does 80 damage instead.",
			fr: "Avant d'infliger des dégâts, comptez le nombre de PV restants au Pokémon Défenseur ainsi qu'à Avaltout. Si le Pokémon Défenseur possède moins de PV qu'Avaltout, cette attaque inflige 80 dégâts.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Gunk Shot",
			fr: "Détricanon",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

