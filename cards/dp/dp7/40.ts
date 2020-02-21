import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-40",
	localId: 40,

	// Card informations
	name: {
		en: "Haunter",
		fr: "Haunter",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 93,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/40/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/40/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/40/high",
		},
	},

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		name: {
			en: "Smog",
			fr: "Purédpois",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hoodwink",
			fr: "Duper",
		},
		text: {
			en: "You may search your opponent's discard pile for up to 3 in any combination of Trainer, Supporter, or Stadium cards and put them into your opponent's hand.",
			fr: "Vous pouvez choisir dans la pile de défausse de votre adversaire une combinaison de jusqu'à 3 cartes Dresseur, Supporter ou Stade et les placer dans la main de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
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
