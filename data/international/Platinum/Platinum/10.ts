import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Giratina",
		'fr-fr': "Giratina",
		'de-de': "Giratina"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [487],

	hp: 100,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Over Slash",
				'fr-fr': "Sur-trancher",
				'de-de': "Over Slash"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon).",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Dark Wing Flaps",
				'fr-fr': "Battements d'ailes obscurs",
				'de-de': "Dark Wing Flaps"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
				'fr-fr': "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez-la et demandez à votre adversaire de la mélanger à son deck.",
				'de-de': "Choose 1 card from your opponent's hand without looking. Look at the card you choe, then have your opponent shuffle that card into his or her deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wrack Down",
				'fr-fr': "Réduire en poussière",
				'de-de': "Wrack Down"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 3,

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 85736,
				cardmarket: 278430
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278430,
				tcgplayer: 85736
			}
		}
	],

}

export default card
