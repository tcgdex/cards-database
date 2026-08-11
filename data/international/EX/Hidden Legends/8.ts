import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Jirachi",
		'fr-fr': "Jirachi",
		'de-de': "Jirachi"
	},

	illustrator: "Ryo Ueda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [385],

	hp: 70,

	types: [
		"Psychic",
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Make a Wish",
				'fr-fr': "Faites un voeu",
				'de-de': "Make a Wish"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from 1 of your Pokémon and put it on that Pokémon. (This counts as evolving that Pokémon.) If you do, put 1 damage counter on Jirachi. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte qui évolue d'1 de vos Pokémon et placez-la sur ce Pokémon. (Vous le faites ainsi évoluer.) Placez ensuite 1 marqueur de dégât sur Jirachi. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a card that evolves from 1 of your Pokémon and put it on that Pokémon. (This counts as evolving that Pokémon.) If you do, put 1 damage counter on Jirachi. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				'en-us': "Mind Bend",
				'fr-fr': "Contrôleur d'esprit",
				'de-de': "Mind Bend"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86325,
				cardmarket: 276082
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 86325,
				cardmarket: 276082
			}
		},
		{
			type: "normal",
			stamp: ['takashi-yoneda'],
			thirdParty: {
				tcgplayer: 477534,
				cardmarket: 871539
			}
		},
	]
}

export default card
