import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-49",
	localId: 49,

	// Card informations
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 523,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/49/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/49/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/49/high",
		},
	},

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 1430,
		type: AbilityType.TALENT,
		name: {
			en: "Zap Zone",
			fr: "Zone Électrique",
		},
		text: {
			en: "Damage from the attacks of your Lightning Pokémon isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts des attaques de vos Pokémon Lightning ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crashing Bolt",
			fr: "Éclair Fracassant",
		},
		text: {
			en: "If your opponent's Active Pokémon has Fighting Resistance, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a une Résistance à Fighting, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 50
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
