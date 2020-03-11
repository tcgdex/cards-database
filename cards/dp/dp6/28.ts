import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-28",
	localId: 28,

	// Card informations
	name: {
		en: "Forretress",
		fr: "Forretress",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 205,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/28/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/28/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/28/high",
		},
	},

	evolveFrom: {
		en: "Pineco",
		fr: "Tannza",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kent Kanetsuna",

	abilities: [{
		id: 383,
		type: AbilityType.POKEBODY,
		name: {
			en: "Iron Shell",
			fr: "Coquille d'acier",
		},
		text: {
			en: "Whenever you attach a basic Energy card from your hand to Forretress (excluding effects of attacks), you may flip a coin. If tails, put 2 damage counters on each Pokémon (both yours and your opponent's) (excluding any Forretress).",
			fr: "Dès que vous attachez une carte Énergie de base de votre main à Forretress (effets d'attaques exclus), lancez une pièce. Si c'est pile, placez 2 marqueurs de dégât sur chaque Pokémon (les vôtres et ceux de votre adversaire) (n'importe quel Forretress exclus).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Explosion",
			fr: "Explosion",
		},
		text: {
			en: "Forretress does 40 damage to itself.",
			fr: "Forretress s'inflige 40 dégâts.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
