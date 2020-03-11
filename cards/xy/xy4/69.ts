import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-69",
	localId: 69,

	// Card informations
	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 685,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/69/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/69/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/69/high",
		},
	},

	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",

	abilities: [{
		id: 1409,
		type: AbilityType.TALENT,
		name: {
			en: "Tasting",
			fr: "Dégustation",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw a card. If this Pokémon is your Active Pokémon, draw 1 more card.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte. Si ce Pokémon est votre Pokémon Actif, piochez une carte supplémentaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Light Pulse",
			fr: "Vibrumineuse",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon during your opponent's next turn.",
			fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
