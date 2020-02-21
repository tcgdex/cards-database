import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM95",
	localId: "SM95",

	// Card informations
	name: {
		en: "Lucario",
		fr: "Lucario",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM95/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM95/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM95/high",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 1185,
		type: AbilityType.TALENT,
		name: {
			en: "Precognitive Aura",
			fr: "Aura Prémonitoire",
		},
		text: {
			en: "Once during your turn (before your attack), if you have Garchomp in play, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez Carchacrok en jeu, vous pouvez chercher une carte dans votre deck puis l’ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Missile Jab",
			fr: "Coup Propulsé",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
