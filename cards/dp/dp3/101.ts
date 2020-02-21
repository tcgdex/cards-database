import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-101",
	localId: 101,

	// Card informations
	name: {
		en: "Qwilfish",
		fr: "Qwilfish",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 211,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/101/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/101/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 99,
		name: "Kenkichi Toyama"
	},

	abilities: [{
		id: 255,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Balloon Sting",
			fr: "Piqûre ballon",
		},
		text: {
			en: "Once during your opponent's turn, if Qwilfish is your Active Pokémon and is damaged by an attack (even if Qwilfish is Knocked Out), you may flip a coin. If heads, the Attacking Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Une seule fois lors du tour de votre adversaire, si Qwilfish est votre Pokémon Actif et qu'une attaque lui inflige des dégâts (même si Qwilfish est mis K.O), vous pouvez lancer une pièce. Si c'est face, le Pokémon Attaquant est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur ce Pokémon entre deux tours.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Nerve Shot",
			fr: "Coup nerveux",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
