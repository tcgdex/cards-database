import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-12",
	localId: 12,

	// Card informations
	name: {
		en: "Abomasnow",
		fr: "Abomasnow",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 460,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/12/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/12/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/12/high.png",
		},
	},

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 1067,
		type: AbilityType.POKEBODY,
		name: {
			en: "Snow Veil",
			fr: "Voile neige",
		},
		text: {
			en: "As long as Abomasnow is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Tant que Blizzaroi est votre Pokémon Actif, tous dégâts infligés à vos Pokémon par une attaque de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Snow Play",
			fr: "Jeux de neige",
		},
		text: {
			en: "Does 20 damage to each of your opponent's Benched Pokémon, excluding Grass Pokémon and Water Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire, Pokémon Grass et Pokémon Water exclus. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc。）",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Below Zero",
			fr: "En dessous de zéro",
		},
		text: {
			en: "If Abomasnow evolved from Snover during this turn, the Defending Pokémon is now Paralyzed.",
			fr: "Si Blizzaroi a évolué de Blizzi lors de ce tour, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

