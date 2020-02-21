import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-38",
	localId: 38,

	// Card informations
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/38/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/38/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/38/high",
		},
	},

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 1334,
		type: AbilityType.TALENT,
		name: {
			en: "Gnawing Curse",
			fr: "Malédiction Rongeante",
		},
		text: {
			en: "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
			fr: "Lorsque votre adversaire attache une carte Énergie de sa main à l’un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fade to Black",
			fr: "Fondu au Noir",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
