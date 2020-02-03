import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-64",
	localId: 64,

	// Card informations
	name: {
		en: "Hawlucha-EX",
		fr: "Brutalibré-EEX",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 701,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/64/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/64/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/64/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 622,
		type: AbilityType.TALENT,
		name: {
			en: "Counterattack",
			fr: "Contre-Attaque",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moonsault Stomp",
			fr: "Piétinage Sélénite",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 40 more damage.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

