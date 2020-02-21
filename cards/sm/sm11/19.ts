import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-19",
	localId: 19,

	// Card informations
	name: {
		en: "Tsareena",
		fr: "Sucreine",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 763,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/19/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/19/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/19/high",
		},
	},

	evolveFrom: {
		en: "Steenee",
		fr: "Candine",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},

	abilities: [{
		id: 1224,
		type: AbilityType.TALENT,
		name: {
			en: "Queenly Reward",
			fr: "Récompense Royale",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Grass Energy card from your discard pile to your Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Grass de votre pile de défausse à votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
