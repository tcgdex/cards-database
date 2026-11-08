import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
		'de-de': "Waumpel"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		265,
	],

	hp: 50,

	types: [
		"Grass",
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
				'en-us': "If Wurmple is your Active Pokémon and is damaged by an opponent's attack (even if Wurmple is Knocked Out), the Attacking Pokémon is now Poisoned.",
				'fr-fr': "Si Chenipotte est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Chenipotte est mis K.O), le Pokémon Attaquant est maintenant Empoisonné.",
				'de-de': "Wenn Waumpel dein Aktives Pokémon ist und ihm Schaden durch einen gegnerischen Angriff zugefügt wird (auch wenn Waumpel kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "String Pull",
				'fr-fr': "Tirer sur la ficelle",
				'de-de': "An den Fäden ziehen"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				'fr-fr': "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen 1 Verteidigendes Pokémon aus. Dein Gegner entscheidet, welches Verteidigende Pokémon ausgetauscht wird."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276947,
		tcgplayer: 90650
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
