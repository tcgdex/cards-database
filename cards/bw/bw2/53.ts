import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-53",
	localId: 53,

	// Card informations
	name: {
		en: "Gigalith",
		fr: "Gigalithe",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 526,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/53/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/53/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/53/high",
		},
	},

	evolveFrom: {
		en: "Boldore",
		fr: "Géolithe",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Shear",
			fr: "Prospection",
		},
		text: {
			en: "Discard the top 5 cards of your deck. If any of those cards are Fighting Energy cards, attach them to this Pokémon.",
			fr: "Défaussez les 5 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fighting, attachez-les à ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Bullet",
			fr: "Fronde",
		},
		text: {
			en: "Does 20 more damage for each Fighting Energy attached to this Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Fighting attachée à ce Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
