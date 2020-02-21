import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-93",
	localId: 93,

	// Card informations
	name: {
		en: "Electrode",
		fr: "Electrode",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/93/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/93/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/93/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},

	abilities: [{
		id: 122,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energymite",
			fr: "Énergimite",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. If you do, Electrode is Knocked Out. Look at the top 7 cards of your deck. Choose as many Energy cards as you like and attach them to your Pokémon in any way you like. Discard the other cards. This power can't be used if Electrode is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce Poké-Power. Dans ce cas, Electrode est mis K.O. Regardez les 7 cartes du dessus de votre deck. Choisissez autant de cartes Énergie que vous le souhaitez et attachez-les à vos Pokémon comme bon vous semble. Défaussez les autres cartes. Ce Poké-Power ne peut pas être utilisé si Electrode est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Gigashock",
			fr: "Electrochok",
		},
		text: {
			en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
