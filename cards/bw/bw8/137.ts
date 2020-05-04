import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-137",
	localId: 137,

	// Card informations
	name: {
		en: "Blastoise",
		fr: "Tortank",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/137/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/137/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/137/high",
		},
	},

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ayaka Yoshida",

	abilities: [{
		id: 574,
		type: AbilityType.TALENT,
		name: {
			en: "Deluge",
			fr: "Déluge",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water de votre main à 1 de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "Does 10 more damage for each Water Energy attached to this Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
