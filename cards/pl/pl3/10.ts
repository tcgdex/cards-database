import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-10",
	localId: 10,

	// Card informations
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 464,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/10/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/10/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/10/high.png",
		},
	},

	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Raging Drill",
			fr: "Perceuse enragée",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each damage counter on Rhyperior.",
			fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Rhinastoc.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Deep Scrap",
			fr: "Grosse bagarre",
		},
		text: {
			en: "If the Defending Pokémon would be Knocked Out by this attack, discard the top 3 cards from your opponent's deck.",
			fr: "Si le Pokémon Défenseur est mis K.O. par cette attaque, défaussez les 3 cartes du dessus du deck de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

