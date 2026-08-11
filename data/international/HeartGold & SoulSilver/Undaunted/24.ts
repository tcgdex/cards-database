import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Vileplume",
		'fr-fr': "Rafflesia",
		'de-de': "Giflor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [45],

	hp: 120,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Gloom",
		'fr-fr': "Ortide"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Allergy Flower",
				'fr-fr': "Fleur allergène",
				'de-de': "Allergieblume"
			},
			effect: {
				'en-us': "Each player can't play any Trainer cards from his or her hand.",
				'fr-fr': "Aucun joueur ne peut jouer de carte Dresseur de sa main.",
				'de-de': "Kein Spieler darf Trainerkarten von seiner Hand spielen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Dazzling Pollen",
				'fr-fr': "Pollen étincelant",
				'de-de': "Verwirrpollen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 50 damage plus 20 more damage. If tails, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires. Si c’est pile, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279277,
				tcgplayer: 90381
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279277,
				tcgplayer: 90381
			}
		},
		{
			type: "normal",
			stamp: ["ross-cawthorn"],
			thirdParty: {
				tcgplayer: 480517
			}
		}
	],

}

export default card
