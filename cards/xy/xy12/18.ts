import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-18",
	localId: 18,

	// Card informations
	name: {
		en: "Arcanine",
		fr: "Arcanin",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/18/high",
		},
	},

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 181,
		type: AbilityType.TALENT,
		name: {
			en: "Burning Road",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon was on the Bench and became your Active Pokémon this turn, you may move any number of Fire Energy attached to your Pokémon to this Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Scorching Breath",
			fr: "Talent : Route Enflammée",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif lors de ce tour, vous pouvez déplacer des Énergies Fire attachées à vos Pokémon vers ce Pokémon.",
		},
		damage: 150
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			fr: "Souffle Brûlant",
		},
		text: {
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
