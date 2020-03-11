import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV77",
	localId: "SV77",

	// Card informations
	name: {
		en: "Altaria-GX",
		fr: "Altaria-GX",
	},

	hp: 200,

	type: [
		Type.DRAGON,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV77/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV77/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV77/high",
		},
	},

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Bright Tone",
			fr: "Tonalité Claire",
		},
		text: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon-GX and Pokémon-EX.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-GX ou de Pokémon-EX.",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Sonic Edge",
			fr: "Tranchant Sonique",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 110
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Euphoria-GX",
			fr: "Euphorie-GX",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep. Heal all damage from all of your Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
