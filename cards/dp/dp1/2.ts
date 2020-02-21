import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-2",
	localId: 2,

	// Card informations
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 477,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/2/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/2/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/2/high",
		},
	},

	evolveFrom: {
		en: "Dusclops",
		fr: "Teraclope",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 14,
		name: "Takabon"
	},

	abilities: [{
		id: 4,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Dark Palm",
			fr: "Paume obscure",
		},
		text: {
			en: "Once during your turn (before your attack), if your opponent has 4 or more Benched Pokémon, you may choose 1 of them and shuffle that Pokémon and all cards attached to it into his or her deck. This power can't be used if Dusknoir is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si votre adversaire possède au moins 4 Pokémon de Banc, vous pouvez en choisir 1 et mélanger ce Pokémon ainsi que toutes les cartes qui lui sont attachées avec son deck. Ce pouvoir ne peut pas être utilisé si Noctunoir est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hard Feelings",
			fr: "Ressentiment",
		},
		text: {
			en: "Put 5 damage counters on the Defending Pokémon. Then, count the number of Prize cards your opponent has taken and put that many damage counters on the Defending Pokémon.",
			fr: "Placez 5 marqueurs de dégât sur le Pokémon Défenseur. Ensuite, comptez le nombre de cartes Récompense récoltées par votre adversaire et placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+30"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
