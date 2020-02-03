import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-7",
	localId: 7,

	// Card informations
	name: {
		en: "Politoed",
		fr: "Tarpaud",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 186,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/7/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/7/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/7/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/7/high.png",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Tetarte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},

	abilities: [{
		id: 916,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Leap Frog",
			fr: "Saute-grenouille",
		},
		text: {
			en: "Once during your turn (before your attack), you may choose a Water Pokémon on your Bench and switch it with your Active Pokémon. This power can't be used if Politoed is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir un Pokémon Water de votre Banc et l'échanger avec votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Tarpaud est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Big Chorus",
			fr: "Choralissime",
		},
		text: {
			en: "Flip a coin for each Water Pokémon you have in play. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce pour chacun de vos Pokémon Water en jeu. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

