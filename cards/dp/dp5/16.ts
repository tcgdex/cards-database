import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-16",
	localId: 16,

	// Card informations
	name: {
		en: "Bronzong",
		fr: "Archéodong",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 437,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/16/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/16/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/16/high",
		},
	},

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 456,
		type: AbilityType.POKEBODY,
		name: {
			en: "Cursed Alloy",
			fr: "Allié maudit",
		},
		text: {
			en: "As long as Bronzong is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Poké-Powers between turns.",
			fr: "Tant qu'Archéodong est votre Pokémon Actif, placez entre deux tours 1 marqueur de dégât sur chacun des Pokémon de votre adversaire possédant des Poké-Powers.",
		}
	}],

	attacks: [{
		name: {
			en: "Pain Amplifier",
			fr: "Amplificateur de douleur",
		},
		text: {
			en: "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it.",
			fr: "Placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire possédant déjà des marqueurs de dégât.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Coating",
			fr: "Mettre une couche",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Bronzong by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Archéodong par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIRE,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
