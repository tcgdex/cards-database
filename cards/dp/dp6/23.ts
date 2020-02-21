import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-23",
	localId: 23,

	// Card informations
	name: {
		en: "Delcatty",
		fr: "Delcatty",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 301,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/23/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/23/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/23/high",
		},
	},

	evolveFrom: {
		en: "Skitty",
		fr: "Eneco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 382,
		type: AbilityType.POKEBODY,
		name: {
			en: "Attracting Body",
			fr: "Corps attrayant",
		},
		text: {
			en: "If Delcatty is your Active Pokémon and is damaged by an opponent's attack (even if Delcatty is Knocked Out), flip a coin. If heads, the Attacking Pokémon is now Confused.",
			fr: "Si Delcatty est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Delcatty est mis K.O), lancez une pièce. Si c'est face, le Pokémon Attaquant est maintenant Confus.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Assist",
			fr: "Assist-Énergie",
		},
		text: {
			en: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
			fr: "Choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à 1 des Pokémon de votre Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
