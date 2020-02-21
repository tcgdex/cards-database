import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-45",
	localId: 45,

	// Card informations
	name: {
		en: "Leafeon",
		fr: "Phyllali Niv. 49",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 470,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/45/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/45/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/45/high",
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
		id: 29,
		name: "Suwama Chiaki"
	},

	abilities: [{
		id: 397,
		type: AbilityType.POKEBODY,
		name: {
			en: "Energy Refresh",
			fr: "Regain d'énergie",
		},
		text: {
			en: "As long as Leafeon is your Active Pokémon, whenever you attach an Energy card from your hand to 1 of your Pokémon, remove 2 damage counters from that Pokémon.",
			fr: "Tant que Phyllali est votre Pokémon Actif, lorsque vous attachez une carte Énergie de votre main à 1 de vos Pokémon, retirez à ce Pokémon 2 marqueurs de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Plus Energy",
			fr: "Énergie plus",
		},
		text: {
			en: "Attach a basic Energy card from your hand to 1 of your Pokémon.",
			fr: "Attachez une carte Énergie de base de votre main à 1 de vos Pokémon.",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Soothing Scent",
			fr: "Senteur apaisante",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
