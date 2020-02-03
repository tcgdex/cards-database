import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM25",
	localId: "SM25",

	// Card informations
	name: {
		en: "Lurantis",
		fr: "Floramantis",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 754,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM25/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM25/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM25/high.png",
		},
	},

	evolveFrom: {
		en: "Fomantis",
		fr: "Mimantis",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 695,
		type: AbilityType.TALENT,
		name: {
			en: "Sunny Day",
			fr: "Zénith",
		},
		text: {
			en: "The attacks of your Grass Pokémon and Fire Pokémon do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon Grass et de vos Pokémon Fire infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

