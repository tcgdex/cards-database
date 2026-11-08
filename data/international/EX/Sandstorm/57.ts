import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea",
		'de-de': "Tuska"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [331],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Poison Payback",
				'fr-fr': "Retour de poison",
				'de-de': "Giftige Abrechnung"
			},
			effect: {
				'en-us': "If Cacnea is your Active Pokémon and is damaged by an opponent's attack (even if Cacnea is Knocked Out), the Attacking Pokémon is now Poisoned.",
				'fr-fr': "Si Cacnea est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Cacnea est mis K.O), le Pokémon Attaquant est maintenant Empoisonné.",
				'de-de': "Wenn Tuska dein Aktives Pokémon ist und ihm Schaden durch einen gegnerischen Angriff zugefügt wird ( auch wenn Tuska kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Light Punch",
				'fr-fr': "Poing léger",
				'de-de': "Leichter Hieb"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275834,
				tcgplayer: 84069
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275834,
				tcgplayer: 84069
			}
		},
	],

}

export default card
