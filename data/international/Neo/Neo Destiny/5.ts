import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Feraligatr",
		'fr-fr': "Aligatueur obscur",
		'de-de': "Dunkles Impergator"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil obscur"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Scare",
				'fr-fr': "Frayeur",
				'de-de': "Scare"
			},
			effect: {
				'en-us': "As long as Dark Feraligatr is your Active Pokémon, all of your opponent's Baby Pokémon Powers stop working and your opponent's Baby Pokémon can't attack. This power stops working while Dark Feraligatr is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Tant qu'Aligatueur obscur reste votre Pokémon Actif, tous les Pouvoirs des Bébés Pokémon de votre adversaire cessent de fonctionner et les Bébés Pokémon de votre adversaire ne peuvent pas attaquer. Ce pouvoir cesse de fonctionner si Aligatueur obscur est Endormi, Confus ou Paralysé.",
				'de-de': "As long as Dark Feraligatr is your Active Pokémon, all of your opponent's Baby Pokémon Powers stop working and your opponent's Baby Pokémon can't attack. This power stops working while Dark Feraligatr is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Crushing Blow",
				'fr-fr': "Koud'dent",
				'de-de': "Crushing Blow"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those cards and discard it.",
				'fr-fr': "Si des cartes Énergie sont attachées au Pokémon Défenseur, lancez une pièce. Si c'est face, choisissez-en une et obligez votre adversaire à s'en défausser.",
				'de-de': "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those cards and discard it."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Its powerful muscles allow it to move at a speed that belies its bulk.",
		'fr-fr': "Ses muscles surpuissants lui permettent de se déplacer très vite et ce, malgré sa forte corpulence."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274657,
				tcgplayer: 84594
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274657,
				tcgplayer: 84594
			}
		}
	]
}

export default card
