import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Shiftry",
		fr: "Tengalice",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 275,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/14/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/14/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/14/high",
		},
	},

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 71,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Darkness Fan",
			fr: "Ventilateur Obscurité",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 Evolved Pokémon on your opponent's Bench, remove the highest Stage Evolution card from that Pokémon, and put it back into his or her hand. This power can't be used if Shiftry is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Tengalice est votre Pokemon actif, vous pouvez lancer une pièce. Si c'est face, choisissez 1 Pokémon Évolué sur le Banc de votre adversaire, retirez-lui la carte Évolution au niveau le plus élevé et replacez-la dans sa main. Ce pouvoir ne peut pas être utilisé si Tengalice est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Spirit Dance",
			fr: "Danse spirituelle",
		},
		text: {
			en: "Flip 2 coins. This attack does 50 damage plus 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
