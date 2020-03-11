import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-48",
	localId: 48,

	// Card informations
	name: {
		en: "Luxray",
		fr: "Luxray",
	},

	hp: 150,

	type: [
		Type.LIGHTNING,
	],

	dexId: 405,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/48/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/48/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/48/high",
		},
	},

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Akira Komayama",

	abilities: [{
		id: 111,
		type: AbilityType.TALENT,
		name: {
			en: "Intimidating Fang",
			fr: "Croc Intimidant",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Active Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques du Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Volt Bolt",
			fr: "Flèche Survoltée",
		},
		text: {
			en: "Discard all Lightning Energy from this Pokémon. This attack does 150 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toute l’Énergie Lightning de ce Pokémon. Cette attaque inflige 150 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
