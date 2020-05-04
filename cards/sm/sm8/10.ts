import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-10",
	localId: 10,

	// Card informations
	name: {
		en: "Ariados",
		fr: "Migalos",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 168,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/10/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/10/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/10/high",
		},
	},

	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Trapping Thread",
			fr: "Fil à Piège",
		},
		text: {
			en: "Whenever your opponent plays an Item or Supporter card from their hand during their next turn, prevent all effects of that card done to the Defending Pokémon.",
			fr: "Chaque fois que votre adversaire joue une carte Objet ou une carte Supporter de sa main pendant son prochain tour, évitez tous les effets de cette carte sur le Pokémon Défenseur.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
