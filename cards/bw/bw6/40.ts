import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-40",
	localId: 40,

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
			en: "https://assets.tcgdex.net/en/bw/bw6/40/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/40/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/40/high",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 147,
		type: AbilityType.TALENT,
		name: {
			en: "Electromagnetic Wall",
			fr: "Mur Électromagnétique",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, whenever your opponent attaches an Energy from his or her hand to 1 of his or her Pokémon, put 3 damage counters on that Pokémon.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire attache une Énergie de sa main à 1 de ses Pokémon, placez 3 marqueurs de dégâts sur le Pokémon auquel l'Énergie a été attachée.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electrobullet",
			fr: "Électrojectile",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
