import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-51",
	localId: 51,

	// Card informations
	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/51/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/51/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
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
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Barrier",
			fr: "Bouclier",
		},
		text: {
			en: "During your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon. If 1 of your Pokémon used Barrier during your last turn, this attack can't be used.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon. Si l’un de vos Pokémon a utilisé Bouclier lors de votre dernier tour, cette attaque ne peut pas être utilisée.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
