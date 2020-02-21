import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-86",
	localId: 86,

	// Card informations
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 197,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/86/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/86/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/86/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},

	abilities: [{
		id: 80,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Cloud-Covered Moon",
			fr: "Lune nuageuse",
		},
		text: {
			en: "Once during your turn (before your attack), if Umbreon is your Active Pokémon, you may flip a coin. If heads, return Umbreon and all cards attached to it to your hand. This power can't be used if Umbreon is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si Noctali est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, reprenez Noctali dans votre main, ainsi que toutes les cartes qui lui sont attachées. Ce pouvoir ne peut pas être utilisé si Noctali est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Evoblast",
			fr: "Evorafale",
		},
		text: {
			en: "Does 50 damage plus 10 more damage for each of your Pokémon in play that evolves from Eevee.",
			fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chacun de vos Pokémon en jeu qui est une évolution d'Evoli.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
