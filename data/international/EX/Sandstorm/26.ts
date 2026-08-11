import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoké",
		'de-de': "Woingenau"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [202],

	hp: 80,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Safeguard",
				'fr-fr': "Rune protectrice",
				'de-de': "Safeguard"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Wobbuffet by your opponent's Pokémon-ex.",
				'fr-fr': "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Qulbutoké par le Pokémon-ex de votre adversaire.",
				'de-de': "Prevent all effects of attacks, including damage, done to Wobbuffet by your opponent's Pokémon-ex."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flip Over",
				'fr-fr': "Faire ressort",
				'de-de': "Flip Over"
			},
			effect: {
				'en-us': "Wobbuffet does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
				'fr-fr': "Qulbutoké s'inflige 10 dégâts. Vous ne pouvez pas appliquer la Faiblesse et la Résistance à ces dégâts.",
				'de-de': "Wobbuffet does 10 damage to itself, and don't apply Weakness and Resistance to this damage."
			},
			damage: 50,

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
			type: "normal",
			thirdParty: {
				cardmarket: 275803,
				tcgplayer: 90613
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275803,
				tcgplayer: 90613
			}
		},
		{
			type: "normal",
			stamp: ["reed-weichler"],
			thirdParty: {
				cardmarket: 871826,
				tcgplayer: 477464
			}
		},
		{
			type: "normal",
			stamp: ["curran-hill"],
			thirdParty: {
				cardmarket: 871513,
				tcgplayer: 477597
			}
		}
	],

}

export default card
