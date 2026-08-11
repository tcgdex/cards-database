import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'de-de': "Dialga"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [483],

	hp: 100,

	types: [
		"Metal"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Time Aura",
				'fr-fr': "Aura temporelle",
				'de-de': "Time Aura"
			},
			effect: {
				'en-us': "As long as Dialga is your Active Pokémon, your opponent can't play any Pokémon from his or her hand to evolve his or her Active Pokémon.",
				'fr-fr': "Tant que Dialga est votre Pokémon Actif, votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer son Pokémon Actif.",
				'de-de': "As long as Dialga is your Active Pokémon, your opponent can't play any Pokémon from his or her hand to evolve his or her Active Pokémon."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Burn",
				'fr-fr': "Brûlure métallique",
				'de-de': "Metal Burn"
			},
			effect: {
				'en-us': "Discard all Metal Energy attached to Dialga.",
				'fr-fr': "Défaussez toutes les Énergies Metal attachées à Dialga.",
				'de-de': "Discard all  Energy attached to Dialga."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity."
	},

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 84803,
				cardmarket: 278426
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278426,
				tcgplayer: 84803
			}
		}
	],

}

export default card
