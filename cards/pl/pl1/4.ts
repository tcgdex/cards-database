import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-4",
	localId: 4,

	// Card informations
	name: {
		en: "Delcatty",
		fr: "Delcatty",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 301,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/4/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/4/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/4/high.png",
		},
	},

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 106,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Power Circulation",
			fr: "Circulation de puissance",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them on top of your deck in any order. If you do, put 2 damage counters on Delcatty. This power can't be used if Delcatty is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre pile de défausse jusqu'à 2 cartes Énergie de base. Montrez-les à votre adversaire et placez-les au dessus de votre deck dans n'importe quel ordre. Placez alors 2 marqueurs de dégât sur Delcatty. Ce pouvoir ne peut pas être utilisé si Delcatty est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Power Heal",
			fr: "Pouvoir guérissant",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each damage counter on Delcatty. Then, remove 2 damage counters from Delcatty.",
			fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Delcatty. Ensuite, retirez à Delcatty 2 marqueurs de dégât.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rear Kick",
			fr: "Pouvoir guérisseur",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

