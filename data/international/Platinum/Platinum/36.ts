import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'de-de': "Vulnona"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [38],

	hp: 90,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix"
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Flame Bash",
				'fr-fr': "Coup de flammes",
				'de-de': "Flame Bash"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. Search your deck for a number of basic Fire Energy cards up to the number of heads and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cherchez dans votre deck autant de cartes Énergie Fire que vous avez obtenu de faces et attachez-les à n'importe lequel de vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
				'de-de': "Flip a coin until you get tails. Search your deck for a number of  Energy cards up to the number of heads and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Mysterious Flames",
				'fr-fr': "Flammes mystérieuses",
				'de-de': "Mysterious Flames"
			},
			effect: {
				'en-us': "If you have more Energy in play than your opponent, the Defending Pokémon is now Burned and Confused.",
				'fr-fr': "Si vous possédez plus d'Énergie en jeu que votre adversaire, le Pokémon Défenseur est maintenant Brûlé et Confus.",
				'de-de': "If you have more Energy in play than your opponent, the Defending Pokémon is now Burned and Confused."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	description: {
		'en-us': "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87773,
				cardmarket: 278457
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278457,
				tcgplayer: 87773
			}
		}
	],

	retreat: 0
}

export default card
