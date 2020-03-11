import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-144",
	localId: 144,

	// Card informations
	name: {
		en: "Electivire FB",
		fr: "Elekable ",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 466,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/144/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/144/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/144/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 990,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Recycle",
			fr: "Recyclage d'énergie",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. If you do, your turn ends. Search your discard pile for up to 3 Energy cards and attach them to your Pokémon in any way you like. This power can't be used if Electivire FB is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Votre tour est alors terminé. Choisissez dans votre pile de défausse jusqu'à 3 cartes Énergie et attachez-les à vos Pokémon de la façon que vous voulez. Ce pouvoir ne peut pas être utilisé si Elekable  est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Powerful Spark",
			fr: "Étincelle puissante",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Energy attached to all of your Pokémon.",
			fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à tous vos Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
