import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-148",
	localId: 148,

	// Card informations
	name: {
		en: "Persian",
		fr: "Persian",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 53,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/148/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/148/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/148/high",
		},
	},

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},

	abilities: [{
		id: 502,
		type: AbilityType.TALENT,
		name: {
			en: "Gathering of Cats",
			fr: "Rassemblement de Chats",
		},
		text: {
			en: "Ignore all Energy in the attack costs of each of your Pokémon in play that has the Caturday attack.",
			fr: "Ignorez toutes les Énergies dans le coût d’attaque de vos Pokémon en jeu qui ont l’attaque Chamedi.",
		}
	}],

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
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
