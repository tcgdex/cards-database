import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-3",
	localId: 3,

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
			en: "https://assets.tcgdex.net/en/dp/dp6/3/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/3/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/3/high",
		},
	},

	evolveFrom: {
		en: "Snorunt",
		fr: "Schneppke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Destiny Bond",
			fr: "Destiny Bond",
		},
		text: {
			en: "Discard a Psychic Energy attached to Froslass. During your opponent's next turn, if Froslass would be Knocked Out by damage from an attack, the Attacking Pokémon is Knocked Out.",
			fr: "Défaussez une Énergie Psychic attachée à Momartik. Lors du prochain tour de votre adversaire, si Momartik est mis K.O par des dégâts d'une attaque, le Pokémon Attaquant est mis K.O.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Icy Breath",
			fr: "Haleine glacée",
		},
		text: {
			en: "The Defending Pokémon is now Asleep. Put 1 damage counter on each of your opponent's Benched Pokémon.",
			fr: "Le Pokémon Défenseur est maintenant Endormi. Placez 1 marqueur de dégât sur chacun des Pokémon de Banc de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
