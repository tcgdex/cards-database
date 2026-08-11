import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Poliwrath",
		'fr-fr': "Tartard",
		'de-de': "Quappo"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Spiral Swirl",
				'fr-fr': "Tourbillon en spirale",
				'de-de': "Spiral Swirl"
			},
			effect: {
				'en-us': "If Poliwrath is your Active Pokémon and is Knocked Out by damage from an opponent's attack, the Attacking Pokémon is now Confused.",
				'fr-fr': "Si Tartard est votre Pokémon Actif et qu'il est mis K.O par les dégâts d'une attaque de votre adversaire, le Pokémon Attaquant est maintenant Confus.",
				'de-de': "If Poliwrath is your Active Pokémon and is Knocked Out by damage from an opponent's attack, the Attacking Pokémon is now Confused."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Beatdown",
				'fr-fr': "Combat",
				'de-de': "Beatdown"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Darkness Pokémon or has Dark in its name, this attack does 40 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon  ou si son nom comporte Obscur, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is a  Pokémon or has Dark in its name, this attack does 40 damage plus 30 more damage."
			},
			damage: "40+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Splash",
				'fr-fr': "Hyper éclaboussure",
				'de-de': "Hyper Splash"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 60 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué de niveau 2, cette attaque inflige 60 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 60 damage plus 30 more damage."
			},
			damage: "60+",

		},
	],

	weaknesses: [
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
				tcgplayer: 88277,
				cardmarket: 276657
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88277,
				cardmarket: 276657
			},
		}
	],
}

export default card
