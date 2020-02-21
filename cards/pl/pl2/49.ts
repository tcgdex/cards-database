import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-49",
	localId: 49,

	// Card informations
	name: {
		en: "Sharpedo",
		fr: "Sharpedo Niv. 43",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 319,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/49/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/49/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/49/high",
		},
	},

	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 713,
		type: AbilityType.POKEBODY,
		name: {
			en: "Energy Shark",
			fr: "Énergie requin",
		},
		text: {
			en: "If Sharpedo is your Active Pokémon and is damaged by an opponent's attack (even if Sharpedo is Knocked Out), flip a coin. If heads, discard an Energy card attached to the Attacking Pokémon.",
			fr: "Si Sharpedo est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Sharpedo est mis K.O), lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Attaquant.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Machouille",
		},
		text: {
			en: "If an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage to that Pokémon until the end of your next turn.",
			fr: "Si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque lui inflige 40 dégâts supplémentaires jusqu'à la fin de votre prochain tour.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Fang",
			fr: "Croc aiguisé",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
