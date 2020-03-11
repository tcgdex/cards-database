import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-84",
	localId: 84,

	// Card informations
	name: {
		en: "Liepard",
		fr: "Léopardus",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 510,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/84/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/84/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/84/high",
		},
	},

	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Silent Claw",
			fr: "Griffe Silencieuse",
		},
		text: {
			en: "Your opponent reveals his or her hand. Discard a Supporter card you find there. Use the effect of that card as the effect of this attack.",
			fr: "Votre adversaire montre sa main. Défaussez une carte Supporter que vous y trouvez. Utilisez l'effet de la carte Supporter défaussée en tant qu'effet de cette attaque.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Fake Out",
			fr: "Bluff",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
