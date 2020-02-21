import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-8",
	localId: 8,

	// Card informations
	name: {
		en: "Salamence",
		fr: "Drattak",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/8/low",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/8/high",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/8/high",
		},
	},

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 111,
		name: "BERUBURI"
	},

	abilities: [{
		id: 876,
		type: AbilityType.TALENT,
		name: {
			en: "Scornful Storm",
			fr: "Vent Méprisant",
		},
		text: {
			en: "Once during your turn (before your attack), you may have your opponent discard cards from his or her hand until he or she has 4 cards left in his or her hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire de défausser des cartes de sa main jusqu'à ce qu'il ne reste que 4 cartes dans sa main.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shred",
			fr: "Déchiquetage",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card
