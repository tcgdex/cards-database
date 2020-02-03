import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-78",
	localId: 78,

	// Card informations
	name: {
		en: "Tangela",
		fr: "Tangela",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 114,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/78/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/78/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/78/high.png",
		},
	},

	evolveFrom: {
		fr: "Saquedeneu",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ingrain",
			fr: "Racines",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, search your deck for a Grass Energy card and attach it to Tangela. Shuffle your deck afterward. If you do, prevent all effects of an attack, including damage, done to Tangela during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, cherchez dans votre deck une carte Énergie Grass et attachez-la à Saquedeneu. Ensuite, mélangez votre deck. Prévenez alors tous les effets d'une attaque, dégâts inclus, infligés à Saquedeneu lors du prochain tour de votre adveraire.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Tickle",
			fr: "Chatouille",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

