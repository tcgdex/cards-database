import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-127",
	localId: 127,

	// Card informations
	name: {
		en: "Krookodile",
		fr: "Crocorible",
	},

	hp: 150,

	type: [
		Type.DARKNESS,
	],

	dexId: 553,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/127/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/127/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/127/high",
		},
	},

	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
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
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Clamp",
			fr: "Pince des Ténèbres",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 60
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bombast",
			fr: "Arrogance",
		},
		text: {
			en: "Does 40 damage times the number of Prize cards you have taken.",
			fr: "Inflige 40 dégâts multipliés par le nombre de cartes Récompense que vous avez récupérées.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
