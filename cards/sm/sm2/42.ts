import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-42",
	localId: 42,

	// Card informations
	name: {
		en: "Alolan Golem",
		fr: "Grolem d’Alola",
	},

	hp: 160,

	type: [
		Type.LIGHTNING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/42/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/42/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/42/high",
		},
	},

	evolveFrom: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electromagnetic Rock Wrecker",
			fr: "Roc-Boulet Électromagnétique",
		},
		text: {
			en: "Flip a coin for each Lightning Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Lightning attachée à ce Pokémon. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 80
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Slam",
			fr: "Tacle Lourd",
		},
		text: {
			en: "This attack does 30 less damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 30 dégâts de moins pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
