import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-5",
	localId: 5,

	// Card informations
	name: {
		en: "Flygon",
		fr: "Flygon Niv. 65",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/5/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/5/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/5/high",
		},
	},

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 350,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rainbow Float",
			fr: "Flottement arc-en-ciel",
		},
		text: {
			en: "If any basic Energy card attached to Flygon is the same type as any of your Pokémon, the Retreat Cost for those Pokémon is 0.",
			fr: "Si une carte Énergie de base attachée à Libegon est du même type qu'un de vos Pokémon, le Coût de retraite de ces Pokémon est de 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand Wall",
			fr: "Mur de sable",
		},
		text: {
			en: "Discard a Stadium card your opponent has in play. If you do, prevent all effects of an attack, including damage, done to Flygon during your opponent's next turn.",
			fr: "Défaussez une carte Stade que votre adversaire a en jeu. Prévenez alors tous les effets d'attaque, dégâts inclus, infligés à Libegon lors du prochain tour de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Swing",
			fr: "Va-et-vient puissant",
		},
		text: {
			en: "Does 60 damage plus 10 more damage for each Evolved Pokémon on your Bench.",
			fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon Évolué se trouvant sur votre Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
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
