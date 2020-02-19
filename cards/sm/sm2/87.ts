import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-87",
	localId: 87,

	// Card informations
	name: {
		en: "Solgaleo",
		fr: "Solgaleo",
	},

	hp: 160,

	type: [
		Type.METAL,
	],

	dexId: 791,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/87/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/87/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/87/high.png",
		},
	},

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Shining Arrow",
			fr: "Flèche Brillante",
		},
		text: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Fangs of the Sunne",
			fr: "Crocs du Halo Solaire",
		},
		text: {
			en: "This Pokémon can't use Fangs of the Sunne during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Crocs du Halo Solaire pendant votre prochain tour.",
		},
		damage: 170
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
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

