import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Forretress",
		'fr-fr': "Foretress",
		'de-de': "Forstellka"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		205,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spiky Shell",
				'fr-fr': "Coquille pointue",
				'de-de': "Spiky Shell"
			},
			effect: {
				'en-us': "Put 3 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
				'fr-fr': "Placez 3 marqueurs de dégât sur le Pokémon Défenseur à la fin du prochain tour de votre adversaire.",
				'de-de': "Put 3 damage counters on the Defending Pokémon at the end of your opponent's next turn."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pop",
				'fr-fr': "Pan!",
				'de-de': "Pop"
			},
			effect: {
				'en-us': "Put 7 damage counters on Forretress. Move all Energy cards attached to Forretress to your Benched Pokémon in any way you like. (Ignore this effect if you don't have any Benched Pokémon.)",
				'fr-fr': "Placez 7 marqueurs de dégât sur Foretress. Déplacez toutes les cartes Énergie attachées à Foretress sur vos Pokémon de Banc, de la façon que vous voulez. (Ignorez cet effet si vous n'avez pas de Pokémon de Banc.)",
				'de-de': "Put 7 damage counters on Forretress. Move all Energy cards attached to Forretress to your Benched Pokémon in any way you like. (Ignore this effect if you don't have any Benched Pokémon.)"
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85548,
				cardmarket: 276652
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85548,
				cardmarket: 276652
			},
		}
	],
}

export default card
