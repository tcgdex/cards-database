import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-61",
	localId: 61,

	// Card informations
	name: {
		en: "Bronzong",
		fr: "Archéodong",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 437,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/61/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/61/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/61/high",
		},
	},

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},

	abilities: [{
		id: 524,
		type: AbilityType.TALENT,
		name: {
			en: "Metal Fortress",
			fr: "Forteresse Métallique",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks, including damage, done to your Benched Pokémon.",
			fr: "Évitez tous les effets des attaques de votre adversaire, y compris les dégâts, infligés à vos Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 60
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
