import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
		'de-de': "Kanivanha"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [318],

	hp: 40,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Rough Skin",
				'fr-fr': "Peau dure",
				'de-de': "Rauhaut"
			},
			effect: {
				'en-us': "If Carvanha is your Active Pokémon and is damaged by an opponent's attack (even if Carvanha is Knocked Out), put 1 damage counter on the Attacking Pokémon.",
				'fr-fr': "Si Carvanha est votre Pokémon Actif et que l'attaque de votre adversaire lui inflige des dégâts (même si Carvanha est mis K.O), placez un marqueur de dégât sur le Pokémon Attaquant.",
				'de-de': "Wenn Kanivanha dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Kanivanha dadurch kampfunfähig wird), legst du 1 Schadensmarke auf das Angreifende Pokémon."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Big Bite",
				'fr-fr': "Grosse morsure",
				'de-de': "Mächtiger Biss"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite tant que le prochain tour de votre adversaire n'est pas terminé.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275699,
				tcgplayer: 84111
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275699,
				tcgplayer: 84111
			}
		},
	],

}

export default card
