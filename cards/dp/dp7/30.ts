import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-30",
	localId: 30,

	// Card informations
	name: {
		en: "Tyranitar",
		fr: "Tyranitar",
	},

	hp: 140,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/30/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/30/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/30/high.png",
		},
	},

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 1072,
		type: AbilityType.POKEBODY,
		name: {
			en: "Darkness Drive",
			fr: "Conducteur obscurité",
		},
		text: {
			en: "After your opponent's Pokémon uses a Poké-Power, you may search your discard pile for a basic Darkness Energy card and attach it to Tyranitar.",
			fr: "Une fois que le Pokémon de votre adversaire a utilisé un Poké-Power, vous pouvez chercher dans votre pile de défausse une carte Énergie de base Darkness et l'attacher à Tyranocif.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Grind",
			fr: "Écrase",
		},
		text: {
			en: "Does 20 damage times the amount of Energy attached to Tyranitar.",
			fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à Tyranocif.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Spinning Tail",
			fr: "Queue tournante",
		},
		text: {
			en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

