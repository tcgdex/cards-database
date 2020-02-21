import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-126",
	localId: 126,

	// Card informations
	name: {
		en: "Tyrogue",
		fr: "Debugant",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 236,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/126/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/126/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/126/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution Bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Hitmonlee, Hitmonchan, or Hitmontop from your hand onto Tyrogue (this counts as evolving Tyrogue) and remove all damage counters from Tyrogue.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Kicklee, Tygnon ou Kapoera de votre main sur Debugant (vous le faites ainsi évoluer) et retirer à Debugant tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Gut Blow",
			fr: "Gros coup d'tripes",
		},
		text: {
			en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 10 damage plus 20 more damage and Tyrogue does 10 damage to itself.",
			fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires et Debugant s'inflige 10 dégâts.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
