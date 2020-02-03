import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Azumarill",
		fr: "Azumarill",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 184,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/18/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/18/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/18/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/18/high.png",
		},
	},

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Defense Curl",
			fr: "Boul'armure",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to Azumarill during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, prévenez tous dégâts infligés à Azumarill lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Bubble Pump",
			fr: "Pompe à bulles",
		},
		text: {
			en: "If Azumarill has 3 or more Energy attached to it, this attack does 40 damage plus 20 more damage. If Azurill is anywhere under Azumarill, flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Si Azumarill possède au moins 3 Énergies, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires. Si Azurill se trouve sous Azumarill, lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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

