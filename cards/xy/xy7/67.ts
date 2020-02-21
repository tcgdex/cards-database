import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-67",
	localId: 67,

	// Card informations
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 474,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/67/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/67/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/67/high",
		},
	},

	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Digital Reboot",
			fr: "Stop Θ",
		},
		text: {
			en: "Devolve as many of your Benched Pokémon as many times as you like. Put each Evolution card removed this way into your hand.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dazzle Blast",
			fr: "Redémarrage Numérique",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Faites dés-évoluer autant de vos Pokémon de Banc autant de fois que vous voulez. Placez chaque carte Évolution retirée de cette façon dans votre main.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Explosion de Lumière",
		},
		text: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
