import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-21",
	localId: 21,

	// Card informations
	name: {
		en: "Poliwrath",
		fr: "Tartard",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 62,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/21/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/21/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/21/high",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Tetarte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Steamroll",
			fr: "Rouleau compresseur",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à l'un des Pokémon se trouvant sur le Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dynamic Punch",
			fr: "Dynamo-poing",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 60 damage plus 40 more damage and the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 40 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
