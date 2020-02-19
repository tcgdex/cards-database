import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-5",
	localId: 5,

	// Card informations
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/5/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/5/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/5/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/5/high.png",
		},
	},

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 630,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dragon Intimidation",
			fr: "Draco-intimidation",
		},
		text: {
			en: "If Garchomp is your Active Pokémon and is damaged by an opponent's attack (even if Garchomp is Knocked Out), choose an Energy card attached to the Attacking Pokémon and put it into your opponent's hand.",
			fr: "Si Carchacrok est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Carchacrok est mis K.O.), choisissez une carte Énergie attachée au Pokémon Attaquant et placez-la dans la main de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Guard Claw",
			fr: "Griffe de garde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Garchomp by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous les dégâts infligés à Carchacrok par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Speed Impact",
			fr: "Impact soudain",
		},
		text: {
			en: "Does 120 damage minus 20 damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 120 dégâts moins 20 dégâts pour chaque Énergie attachée au Pokémon Défenseur.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+30"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

