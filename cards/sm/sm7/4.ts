import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-4",
	localId: 4,

	// Card informations
	name: {
		en: "Scyther",
		fr: "Insécateur",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 123,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/4/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/4/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Twin Play",
			fr: "Duo",
		},
		text: {
			en: "Search your deck for up to 2 Scyther and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 Insécateur dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Agility",
			fr: "Hâte",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
