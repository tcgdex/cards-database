import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-94",
	localId: 94,

	// Card informations
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/94/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/94/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/94/high",
		},
	},

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Takashi Yamaguchi",

	abilities: [{
		id: 773,
		type: AbilityType.POKEBODY,
		name: {
			en: "Catastrophe",
			fr: "Catastrophe",
		},
		text: {
			en: "As long as Gengar is your Active Pokémon, if any of your opponent's Pokémon would be Knocked Out, put that Pokémon in the Lost Zone instead of discarding it. (Discard all cards attached to that Pokémon.)",
			fr: "Tant qu'Ectoplasma est votre Pokémon Actif, si l'un des Pokémon de votre adversaire est mis K.O., placez ce Pokémon dans la Zone Perdue au lieu de le défausser. (Défaussez toutes les cartes attachées à ce Pokémon.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hurl into Darkness",
			fr: "Jet dans les Ténèbres",
		},
		text: {
			en: "Look at your opponent's hand and choose a number of Pokémon you find there up to the number of Psychic Energy attached to Gengar. Put the Pokémon you chose in the Lost Zone.",
			fr: "Regardez la main de votre adversaire et choisissez-y autant de Pokémon qu'il existe de cartes Énergie Psychic attachées à Ectoplasma. Placez les Pokémon que vous avez choisis dans la Zone Perdue.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Cursed Drop",
			fr: "Chute maudite",
		},
		text: {
			en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 4 marqueurs de dégât sur les Pokémon de votre adversaire, comme bon vous semble.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
