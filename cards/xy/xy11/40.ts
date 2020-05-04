import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-40",
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
			en: "https://assets.tcgdex.net/en/xy/xy11/40/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/40/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/40/high",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kanako Eo",

	abilities: [{
		id: 1352,
		type: AbilityType.TALENT,
		name: {
			en: "Shocking Light",
			fr: "Lumière Choquante",
		},
		text: {
			en: "Once during your turn (before your attack), you may put 3 damage counters on 1 of your opponent's Pokémon-EX.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 3 marqueurs de dégâts sur l’un des Pokémon-EX de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Gigavolt",
			fr: "Gigavolt",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 80
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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
