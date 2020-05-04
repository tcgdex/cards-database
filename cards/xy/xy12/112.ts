import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-112",
	localId: 112,

	// Card informations
	name: {
		en: "Imakuni?'s Doduo",
		fr: "Doduo d’Imakuni?",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 84,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/112/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/112/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Imakuni?",

	abilities: [{
		id: 1299,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Frenzied Escape",
		},
		text: {
			en: "When this Doduo retreats, hold this card and throw it as hard as you can because Doduo is running away. Throw the card horizontally with a snap to get the farthest distance!",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Harmonize ",
			fr: "Pouvoir Pokémon : Sortie Précipitée",
		},
		text: {
			en: "From the moment you use this attack, you must begin to sing a song. (While the song is being sung, the game continues.) When the song is finished, this attack does 30 damage.",
			fr: "Lorsque ce Doduo bat en retraite, saisissez cette carte et jetez-la aussi fort que possible car Doduo s’enfuit. Jetez la carte horizontalement et fort pour qu'elle aille le plus loin possible !",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Harmoniser",
		},
		text: {
			fr: "Dès que vous utilisez cette attaque, vous devez chanter une chanson. (Pendant ce temps, la partie continue.) Lorsque la chanson se termine, cette attaque inflige 30 dégâts.",
		},
		damage: 30
	},{
		name: {},
		text: {
			fr: "(Carte non utilisable dans les tournois officiels.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
