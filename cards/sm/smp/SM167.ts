import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM167",
	localId: "SM167",

	// Card informations
	name: {
		fr: "Celebi et Florizarre-GX",
	},

	hp: 270,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM167/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM167/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		name: {
			fr: "Règle des ESCOUADES",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Pollen Dangereux",
		},
		text: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
		},
		damage: 50
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Lance-Soleil",
		},
		damage: 150
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Sempervirent-GX",
		},
		text: {
			fr: "Soignez tous les dégâts de ce Pokémon. Si au moins une Énergie Grass supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), mélangez toutes les cartes dans votre pile de défausse avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Promos",
		code: "smp"
	}
}

export default card
