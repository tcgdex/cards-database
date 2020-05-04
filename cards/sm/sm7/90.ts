import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-90",
	localId: 90,

	// Card informations
	name: {
		en: "Scizor-GX",
		fr: "Cizayox-GX",
	},

	hp: 210,

	type: [
		Type.METAL,
	],

	dexId: 212,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/90/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/90/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/90/high",
		},
	},

	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1127,
		type: AbilityType.TALENT,
		name: {
			en: "Danger Perception",
			fr: "Perception du Danger",
		},
		text: {
			en: "If this Pokémon's remaining HP is 100 or less, its attacks do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "S’il reste 100 PV ou moins à ce Pokémon, ses attaques infligent 80 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Steel Wing",
			fr: "Aile d’Acier",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 80
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cross-Cut-GX",
			fr: "Coupe Transversale-GX",
		},
		text: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 100 more damage. (You can't use more than 1 GX attack in a game.)",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 100 dégâts supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
