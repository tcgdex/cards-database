import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-145",
	localId: 145,

	// Card informations
	name: {
		en: "Dusk Mane Necrozma-GX",
		fr: "Necrozma Crinière du Couchant-GX",
	},

	hp: 190,

	type: [
		Type.METAL,
	],

	dexId: 800,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/145/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/145/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/145/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Slash",
			fr: "Tranch’Griffe",
		},
		damage: 60
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Meteor Tempest",
			fr: "Tempête Météorique",
		},
		text: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
		},
		damage: 220
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Sun's Eclipse-GX",
			fr: "Éclipse Solaire-GX",
		},
		text: {
			en: "You can use this attack only if you have more Prize cards remaining than your opponent. (You can't use more than 1 GX attack in a game.)",
			fr: "Vous pouvez utiliser cette attaque seulement s’il vous reste plus de cartes Récompense que votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 250
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
