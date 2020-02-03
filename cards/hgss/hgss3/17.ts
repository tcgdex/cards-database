import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-17",
	localId: 17,

	// Card informations
	name: {
		en: "Leafeon",
		fr: "Phyllali",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 470,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/17/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/17/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/17/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/17/high.png",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 63,
		name: "Noriko Hotta"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Miasma Wind",
			fr: "Vent miasme",
		},
		text: {
			en: "Does 50 damage times the number of Special Conditions affecting the Defending Pokémon.",
			fr: "Inflige 50 dégâts multipliés par le nombre d'États Spéciaux affectant le Pokémon Défenseur.",
		},
		damage: 50
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Soothing Scent",
			fr: "Senteur apaisante",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

