import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-15",
	localId: 15,

	// Card informations
	name: {
		en: "Aerodactyl",
		fr: "Ptera",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/15/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/15/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/15/high.png",
		},
	},

	evolveFrom: {
		en: "Old Amber",
		fr: "Vieil Ambre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 593,
		type: AbilityType.POKEBODY,
		name: {
			en: "Primal Claw",
			fr: "Griffe primitive",
		},
		text: {
			en: "After your opponent's Pokémon uses a Poké-Power, put 2 damage counters on that Pokémon.",
			fr: "Une fois que le Pokémon de votre adversaire a utilisé un Poké-Power, placez 2 marqueurs de dégât sur ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Supersonic",
			fr: "Ultrason",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

