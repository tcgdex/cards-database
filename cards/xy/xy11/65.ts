import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-65",
	localId: 65,

	// Card informations
	name: {
		en: "Yveltal",
		fr: "Yveltal",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 717,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/65/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/65/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/65/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Oblivion Wing",
			fr: "Mort-Ailes",
		},
		text: {
			en: "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie Darkness de votre pile de défausse à l’un de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Blade",
			fr: "Lame Obscure",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
			fr: "Lancez une pièce. Si c’est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

