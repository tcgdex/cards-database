import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-4",
	localId: 4,

	// Card informations
	name: {
		en: "Dialga",
		fr: "Dialga",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/4/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/4/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/4/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Time Shift",
			fr: "Orbe Adamant",
		},
		text: {
			en: "Draw cards until you have 6 cards in your hand.",
			fr: "Si un Pokémon Actif possède une Faiblesse au type Metal, les attaques de Dialga infligent 20 dégâts supplémentaires à ce Pokémon (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Diamond Blast",
			fr: "Modification temporelle",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 60 damage plus 20 more damage.",
			fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
		},
		damage: 60
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Explosion diamant",
		},
		text: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: "60+"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

