import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'de-de': "Kramurx"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		198,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Night Song",
				'fr-fr': "Chanson nocturne",
				'de-de': "Night Song"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Asleep.",
				'fr-fr': "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger. Le nouveau Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Plunder",
				'fr-fr': "Pillage",
				'de-de': "Plunder"
			},
			effect: {
				'en-us': "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur.",
				'de-de': "Before doing damage, discard all Trainer cards attached to the Defending Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87651,
				cardmarket: 276676
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87651,
				cardmarket: 276676
			},
		}
	],
}

export default card
