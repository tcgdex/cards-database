import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-3",
	localId: 3,

	// Card informations
	name: {
		en: "Darkrai G",
		fr: "Darkrai  Niv. 58",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 491,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/3/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/3/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/3/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 90,
		name: "Makoto Imai"
	},

	abilities: [{
		id: 349,
		type: AbilityType.POKEBODY,
		name: {
			en: "Eerie Aura",
			fr: "Aura sinistre",
		},
		text: {
			en: "Put 1 damage counter on each of your opponent's Pokémon that remains Asleep between turns.",
			fr: "Placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire qui reste Endormi entre deux tours.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Sleep",
			fr: "Dodo obscurité",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, that Pokémon is now Asleep.",
			fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Endormi.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

