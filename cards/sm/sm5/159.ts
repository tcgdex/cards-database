import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-159",
	localId: 159,

	// Card informations
	name: {
		en: "Glaceon-GX",
		fr: "Givrali-GX",
	},

	hp: 200,

	type: [
		Type.WATER,
	],

	dexId: 471,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/159/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/159/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/159/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/159/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1165,
		type: AbilityType.TALENT,
		name: {
			en: "Freezing Gaze",
			fr: "Regard Glacial",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Pokémon-GX and Pokémon-EX in play, in their hand, and in their discard pile have no Abilities, except for Freezing Gaze.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, les Pokémon-GX et les Pokémon-EX de votre adversaire en jeu, dans sa main et dans sa pile de défausse n’ont pas de talent, à l’exception de Regard Glacial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frost Bullet",
			fr: "Kunaï Givré",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 90
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Polar Spear-GX",
			fr: "Lance Polaire-GX",
		},
		text: {
			en: "This attack does 50 damage for each damage counter on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
