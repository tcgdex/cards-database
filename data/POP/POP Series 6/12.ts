import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Buneary",
		fr: "Buneary"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		427,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Splash",
				fr: "Trempette"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jump Kick",
				fr: "Pied Sauté"
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	description: {
		en: "It slams foes by sharply uncoiling is rolled ears. It stings enough to make a grown-up cry in pain."
	},

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277897,
		tcgplayer: 84038
	}
}

export default card
