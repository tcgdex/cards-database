import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-97",
	localId: 97,

	// Card informations
	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 778,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/97/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/97/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/97/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/97/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 1377,
		type: AbilityType.TALENT,
		name: {
			en: "Shadow Box",
			fr: "Boîte Obscure",
		},
		text: {
			en: "Pokémon-GX that have any damage counters on them (both yours and your opponent's) have no Abilities.",
			fr: "Les Pokémon-GX qui ont des marqueurs de dégâts (les vôtres et ceux de votre adversaire) n’ont pas de talent.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Trickery",
			fr: "Queue Étourdissante",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 20
	}],





	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

