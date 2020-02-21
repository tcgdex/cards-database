import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-3",
	localId: 3,

	// Card informations
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/3/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/3/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/3/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},

	abilities: [{
		id: 310,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fury Blaze",
			fr: "Flammes frénétiques",
		},
		text: {
			en: "If your opponent has 3 or less Prize cards left, each of Charizard's attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			fr: "Si votre adversaire possède moins de 3 cartes Récompense, chacune des attaques de Dracaufeu inflige 50 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance.)",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Blast Burn",
			fr: "Rafale feu",
		},
		text: {
			en: "Flip a coin. If heads, discard 2 Energy cards attached to Charizard. If tails, discard 4 Energy cards attached to Charizard. (If you can't, this attack does nothing.)",
			fr: "Lancez une pièce. Si c'est face, défaussez 2 cartes Énergie attachées à Dracaufeu. Si c'est pile, défaussez 4 cartes Énergie attachées à Dracaufeu. (Si vous ne pouvez pas, cette attaque est sans effet).",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+40"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
