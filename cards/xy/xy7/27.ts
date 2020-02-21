import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-27",
	localId: 27,

	// Card informations
	name: {
		en: "Ampharos-EX",
		fr: "Pharamp-EX",
	},

	hp: 170,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/27/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/27/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Thunder Rod",
			fr: "Parafoudre",
		},
		text: {
			en: "Look at the top 4 cards of your deck and attach as many Lightning Energy cards you find there as you like to this Pokémon. Shuffle the other cards back into your deck.",
			fr: "Regardez les 4 cartes du dessus de votre deck et attachez autant de cartes Énergie Lightning que vous voulez et que vous y trouvez à ce Pokémon. Mélangez les autres cartes avec votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sparkling Tail",
			fr: "Queue Étincelante",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
