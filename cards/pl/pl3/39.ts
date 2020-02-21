import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-39",
	localId: 39,

	// Card informations
	name: {
		en: "Primeape",
		fr: "Colossinge",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 57,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/39/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/39/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/39/high",
		},
	},

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Top Drop",
			fr: "Tomber de haut",
		},
		text: {
			en: "Discard the top card from your opponent's deck. If you discarded a Pokémon, this attack does damage equal to the HP of that Pokémon.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire. Si vous défaussez un Pokémon, cette attaque inflige autant de dégâts que ce Pokémon possède de PV.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Brick Break",
			fr: "Casse-brique",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
