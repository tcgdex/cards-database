import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-5",
	localId: 5,

	// Card informations
	name: {
		en: "Glaceon",
		fr: "Givrali",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 471,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/5/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/5/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/5/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Snow Cloak",
			fr: "Rideau Neige",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Glaceon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Givrali lors du prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Speed Slide",
			fr: "Glissade rapide",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
