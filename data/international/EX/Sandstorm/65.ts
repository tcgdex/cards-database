import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'de-de': "Fukano"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [58],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Fire Veil",
				'fr-fr': "Voile feu",
				'de-de': "Feuerschleier"
			},
			effect: {
				'en-us': "If Growlithe is your Active Pokémon and is damaged by an opponent's attack (even if Growlithe is Knocked Out), the Attacking Pokémon is now Burned.",
				'fr-fr': "Si Caninos est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Caninos est mis K.O), le Pokémon Attaquant est maintenant Brûlé.",
				'de-de': "Wenn Fukano dein Aktives Pokémon ist und ihm Schaden durch einen gegnerischen Angriff zugefügt wird (auch wenn Arkani kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Intimidation",
				'de-de': "Flackern"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275842,
				tcgplayer: 85951
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275842,
				tcgplayer: 85951
			}
		},
	],

}

export default card
