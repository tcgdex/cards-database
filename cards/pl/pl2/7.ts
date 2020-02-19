import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-7",
	localId: 7,

	// Card informations
	name: {
		en: "Jirachi",
		fr: "Jirachi Niv. 39",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/7/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/7/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/7/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/7/high.png",
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
		id: 353,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Final Wish",
			fr: "Dernier souhait",
		},
		text: {
			en: "Once during your opponent's turn, if Jirachi would be Knocked Out by damage from an attack, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
			fr: "Une seule fois lors du tour de votre adversaire, si Jirachi est mis K.O par des dégâts d'une attaque, vous pouvez choisir 1 carte dans votre deck et la placer dans votre main. Ensuite, mélangez votre deck.",
		}
	}],

	attacks: [{
		name: {
			en: "Detour",
			fr: "Détour",
		},
		text: {
			en: "If you have a Supporter card in play, use the effect of that card as the effect of this attack.",
			fr: "Si vous avez une carte Supporter en jeu, utilisez l'effet de cette carte comme l'effet de cette attaque.",
		},
	},{
		cost: [
			Type.METAL
		],
		name: {
			en: "Swift",
			fr: "Météores",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

