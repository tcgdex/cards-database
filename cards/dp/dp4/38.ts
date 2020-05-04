import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-38",
	localId: 38,

	// Card informations
	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 368,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/38/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/38/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/38/high",
		},
	},

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {
			en: "Sweet Temptation",
			fr: "Douce tentation",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. This attack does 10 damage to the new Defending Pokémon.",
			fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Cette attaque inflige 10 dégâts au nouveau Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Snap",
			fr: "Claquement psy",
		},
		text: {
			en: "If Gorebyss has any Psychic Energy attached to it, this attack does 30 damage plus 20 more damage and the Defending Pokémon is now Confused.",
			fr: "Si Rosabyss possède de l'Énergie Psychic, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
