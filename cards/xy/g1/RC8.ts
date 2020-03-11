import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC8",
	localId: "RC8",

	// Card informations
	name: {
		en: "Froslass",
		fr: "Momartik",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 478,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC8/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC8/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC8/high",
		},
	},

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 583,
		type: AbilityType.TALENT,
		name: {
			en: "Drag Along",
			fr: "Traînée",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
			fr: "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d'une attaque de votre adversaire, lancez une pièce. Si c'est face, le Pokémon Attaquant est mis K.O.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Snowy Drop",
			fr: "Chute Enneigée",
		},
		text: {
			en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
