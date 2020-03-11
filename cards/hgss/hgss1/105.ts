import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-105",
	localId: 105,

	// Card informations
	name: {
		en: "Ampharos",
		fr: "Pharamp",
	},

	hp: 140,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/105/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/105/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/105/high",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kent Kanetsuna",

	abilities: [{
		id: 588,
		type: AbilityType.POKEBODY,
		name: {
			en: "Conductivity",
			fr: "Conductivité",
		},
		text: {
			en: "Whenever your opponent attaches an Energy card from his or her hand to 1 of his or her Pokémon, put 1 damage counter on that Pokémon.",
			fr: "Lorsque votre adversaire attache une carte Énergie de sa main à l’un de ses Pokémon, appliquez un marqueur de dégâts à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Crush",
			fr: "Écras’éclair",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 40 more damage. If tails, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires. Si c’est pile, défaussez-vous d’une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
