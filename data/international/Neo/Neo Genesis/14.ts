import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Slowking",
		'fr-fr': "Roigada",
		'de-de': "Laschoking"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Mind Games",
				'fr-fr': "Jeux d'Esprit",
				'de-de': "Mind Games"
			},
			effect: {
				'en-us': "Whenever your opponent plays a Trainer card, you may flip a coin. If heads, that card does nothing. Put it on top of your opponent's deck. This power can't be used if Slowking is Asleep, Confused, or Paralyzed.",
				'fr-fr': "À chaque fois que votre adversaire joue une carte Dresseur, vous pouvez lancer une pièce. Si c'est face, cette carte ne fait rien. Placez-la sur le dessus du deck de votre adversaire. Ce pouvoir ne peut être utilisé si Roigada est Endormi, Confus ou Paralysé.",
				'de-de': "Whenever your opponent play a Trainer card, you may flip a coin. If heads, that card does nothing. Put it on top of your opponent´s deck. This power can´t be used if Slowking is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Mind Blast",
				'fr-fr': "Explosion cérébrale",
				'de-de': "Mind Blast"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Confused. If tails, this attack does 20 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires, le Pokémon Défenseur est maintenant Confus. Si c'est pile, cette attaque inflige 20 dégâts.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Confused. If tails, this attack does 20 damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "When its head was bitten, toxins entered Slowpoke's head and unlocked an extraordinary power.",
		'fr-fr': "Un jour qu'il fut mordu à la tête, des toxines pénétrèrent dans le cerveau de Ramoloss en libérant un pouvoir extraordinaire."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274414,
				tcgplayer: 89311
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274414,
				tcgplayer: 89311
			}
		}
	]
}

export default card
