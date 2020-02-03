import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-99",
	localId: 99,

	// Card informations
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 107,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/99/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/99/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/99/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Counter Punch",
			fr: "Contre-poing",
		},
		text: {
			en: "During your opponent's next turn, if Hitmonchan is damaged by an opponent's attack (even if Hitmonchan is Knocked Out), put 4 damage counters on the Attacking Pokémon.",
			fr: "Lors du prochain tour de votre adversaire, si une attaque de votre adversaire inflige des dégâts à Tygnon (même si Tygnon est mis K.O), placez 4 marqueurs de dégât sur le Pokémon Attaquant.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Gut Strike",
			fr: "Coup d'tripes",
		},
		text: {
			en: "If Tyrogue is anywhere under Hitmonchan, this attack's base damage is 60 instead of 30.",
			fr: "Si Debugant se trouve sous Tygnon, les dégâts de base de cette attaque sont de 60 au lieu de 30.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

