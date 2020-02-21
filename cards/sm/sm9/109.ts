import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-109",
	localId: 109,

	// Card informations
	name: {
		en: "Aegislash",
		fr: "Exagide",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 681,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/109/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/109/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/109/high",
		},
	},

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 1319,
		type: AbilityType.TALENT,
		name: {
			en: "Royal Guard",
			fr: "Barrière Royale",
		},
		text: {
			en: "This Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shield Bash",
			fr: "Brusque Parade",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
