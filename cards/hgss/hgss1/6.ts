import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 189,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/6/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/6/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/6/high",
		},
	},

	evolveFrom: {
		en: "Skiploom",
		fr: "Floravol",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Mass Attack",
			fr: "Attaque en masse",
		},
		text: {
			en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's).",
			fr: "Inflige 10 dégâts multiplié par le nombre de Pokémon en jeu (les vôtres et ceux de votre adversaire).",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leaf Guard",
			fr: "Feuille garde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Jumpluff by attacks is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à Cotovol par des attaques pendant le prochain tour de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
