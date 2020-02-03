import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-22",
	localId: 22,

	// Card informations
	name: {
		en: "Clefable",
		fr: "Melodelfe",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 36,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/22/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/22/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/22/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/22/high.png",
		},
	},

	evolveFrom: {
		en: "Clefairy",
		fr: "Melofée",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metronome",
			fr: "Métronome",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) Clefable performs that attack.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur. Métronome copie cette attaque, son Coût en Énergie excepté. (Vous devez toujours faire ce que l'attaque indique.) Melodelfe utilise cette attaque.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

