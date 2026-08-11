import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Blaziken ex",
		'fr-fr': "Brasegali ex",
		'de-de': "Lohgock ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [257],

	hp: 150,

	stage: "Stage2",
	types: [
		"Fire"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Blaze Kick",
				'fr-fr': "Pied Brûleur",
				'de-de': "Blaze Kick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Si c'est pile, cette attaque inflige 30 dégâts et le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Burned."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Volcanic Ash",
				'fr-fr': "Cendres volcaniques",
				'de-de': "Volcanic Ash"
			},
			effect: {
				'en-us': "Discard 2 Fire Energy attached to Blaziken ex and then choose 1 of your opponent's Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez 2 Énergies  attachées à Brasegali ex puis choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 100 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Discard 2  Energy attached to Blaziken ex and then choose 1 of your opponent's Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275866,
				tcgplayer: 83912
			}
		},
		{
			type: "holo",
			stamp: ["chris-fulop"],
			thirdParty: {
				cardmarket: 871796,
				tcgplayer: 477368
			}
		}
	],

}

export default card
