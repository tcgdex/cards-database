import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-3",
	localId: 3,

	// Card informations
	name: {
		en: "Victreebel",
		fr: "Empiflor",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 71,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/3/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/3/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/3/high",
		},
	},

	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Pollen Hazard",
			fr: "Pollen Dangereux",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stick and Absorb",
			fr: "Colle et Absorbe",
		},
		text: {
			en: "Heal 20 damage from this Pokémon. The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Soignez 20 dégâts à ce Pokémon. Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
