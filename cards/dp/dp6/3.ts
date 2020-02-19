import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp6/3/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/3/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/3/high.png",
		},
	},

	evolveFrom: {
		en: "Snorunt",
		fr: "Schneppke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



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

