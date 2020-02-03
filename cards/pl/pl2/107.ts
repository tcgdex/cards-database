import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-107",
	localId: 107,

	// Card informations
	name: {
		en: "Hippowdon",
		fr: "Hippodocus Niv. X",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 450,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/107/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/107/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/107/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/107/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 480,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sand Reset",
			fr: "Redémarrage sableux",
		},
		text: {
			en: "Once during a game on your turn (before your attack), each player shuffles all cards in play (excluding Pokémon and Supporter cards) into his or her deck. You can't use more than 1 Sand Reset Poké-Power each game.",
			fr: "Une seule fois lors d'une partie lors de votre tour (avant votre attaque), chaque joueur mélange toutes les cartes en jeu (Pokémon et cartes Supporter exclus) avec son deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Redémarrage sableux par partie.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Shoot",
			fr: "Double shoot",
		},
		text: {
			en: "Discard 2 Fighting Energy attached to Hippowdon and choose 2 of your opponent's Benched Pokémon. This attack does 40 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies Fighting attachées à Hippodocus et choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque leur inflige 40 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

