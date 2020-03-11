import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-10",
	localId: 10,

	// Card informations
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 197,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/10/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/10/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/10/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Moonlight Fang",
			fr: "Croc lunaire",
		},
		text: {
			en: "During your opponent's next turn, prevent all effects, including damage, done to Umbreon by attacks from your opponent's Pokémon that has any Poké-Powers or Poké-Bodies.",
			fr: "Pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques (y compris les dégâts) infligés à Noctali par un Pokémon de votre adversaire possédant des Poké-Powers ou des Poké-Bodies.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Blow",
			fr: "Coup d'poing éclair",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
