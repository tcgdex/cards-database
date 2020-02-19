import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-72",
	localId: 72,

	// Card informations
	name: {
		en: "Diancie-EX",
		fr: "Diancie-EX",
	},

	hp: 150,

	type: [
		Type.FAIRY,
	],

	dexId: 719,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/72/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/72/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/72/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/72/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},

	abilities: [{
		id: 1421,
		type: AbilityType.TALENT,
		name: {
			en: "Sparkle Veil",
			fr: "Voile Étincelant",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, tous les dégâts infligés à vos Pokémon par une attaque de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wonder Stage",
			fr: "Scène Miracle",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 50 more damage.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 50 dégâts supplémentaires.",
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

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

