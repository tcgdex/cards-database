import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-7",
	localId: 7,

	// Card informations
	name: {
		en: "Leavanny",
		fr: "Manternel",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 542,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/7/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/7/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/7/high",
		},
	},

	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Coordinate",
			fr: "Composition",
		},
		text: {
			en: "Choose up to 2 of your Benched Pokémon that have no Pokémon Tools attached to them. For each of those Pokémon, search your deck for a Pokémon Tool card and attach it to that Pokémon. Shuffle your deck afterward.",
			fr: "Choisissez jusqu'à 2 de vos Pokémon de Banc qui n'ont pas de carte Outil Pokémon leur étant attachée. Pour chacun des Pokémon choisis, cherchez une carte Outil Pokémon dans votre deck et attachez-la au Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Storm",
			fr: "Tempête Verte",
		},
		text: {
			en: "Heal 20 damage from each of your Grass Pokémon.",
			fr: "Soignez 20 dégâts à chacun de vos Pokémon Grass.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
