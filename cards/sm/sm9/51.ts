import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-51",
	localId: 51,

	// Card informations
	name: {
		en: "Tapu Koko ◇",
		fr: "Tokorico ",
	},

	hp: 130,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/51/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/51/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/51/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/51/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 1289,
		type: AbilityType.TALENT,
		name: {
			en: "Dance of the Ancients",
			fr: "Danse des Ancêtres",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may choose 2 of your Benched Pokémon and attach a Lightning Energy card from your discard pile to each of them. If you do, discard all cards from this Pokémon and put it in the Lost Zone.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez choisir 2 de vos Pokémon de Banc et attacher une carte Énergie Lightning de votre pile de défausse à chacun d’eux. Dans ce cas, défaussez toutes les cartes attachées à ce Pokémon et placez-le dans la Zone Perdue.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Mach Bolt",
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
		damage: 120
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			fr: "Éclair Fulgurant",
		},
		damage: 120
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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

