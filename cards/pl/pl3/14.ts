import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-14",
	localId: 14,

	// Card informations
	name: {
		en: "Yanmega",
		fr: "Yanmega",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 469,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/14/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/14/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/14/high.png",
		},
	},

	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 639,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Speed Boost",
			fr: "Turbo",
		},
		text: {
			en: "Once during your turn (before your attack), if Yanmega is your Active Pokémon, you may search your discard pile for a Grass Energy card and attach it to Yanmega. This power can't be used if Yanmega is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Yanmega est votre Pokémon Actif, vous pouvez chercher dans votre pile de défausse une carte Énergie Grass et l'attacher à Yanmega. Ce pouvoir ne peut pas être utilisé si Yanmega est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wind Return",
			fr: "Retour de vent",
		},
		text: {
			en: "You may return all Grass Energy attached to Yanmega to your hand. If you do, this attack does 20 damage plus 20 more damage for each Energy card you returned.",
			fr: "Vous pouvez reprendre dans votre main toutes les Énergies Grass attachées à Yanmega. Cette attaque inflige alors 20 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie reprise.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Speed Dive",
			fr: "Équilibre Plongée",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

