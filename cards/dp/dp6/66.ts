import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-66",
	localId: 66,

	// Card informations
	name: {
		en: "Mightyena",
		fr: "Grahyena",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 262,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/66/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/66/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/66/high",
		},
	},

	evolveFrom: {
		en: "Poochyena",
		fr: "Fiffyen",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Bite On",
			fr: "Morsure à répétition",
		},
		text: {
			en: "If the Defending Pokémon isn't an Evolved Pokémon, that Pokémon can't attack, retreat, or use any Poké-Powers during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur n'est pas un Pokémon Évolué, il ne peut pas attaquer, battre en retraite ou utiliser de Poké-Powers lors du prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Harass",
			fr: "Harcèlement",
		},
		text: {
			en: "Does 10 damage times the number of Pokémon you have in play.",
			fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon que vous avez en jeu.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
