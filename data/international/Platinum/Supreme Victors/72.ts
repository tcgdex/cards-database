import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'de-de': "Kramurx"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [198],

	hp: 70,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Switcheroo",
				'fr-fr': "Passe-Passe",
				'de-de': "Wechseldich"
			},
			effect: {
				'en-us': "Move a Pokémon Tool card attached to 1 of your opponent's Pokémon to another of your opponent's Pokémon (excluding Pokémon that already has a Pokémon Tool attached to it). (If an effect of this attack is prevented, this attack does nothing.)",
				'fr-fr': "Déplacez une carte Outil Pokémon attachée à 1 des Pokémon de votre adversaire sur un autre Pokémon de votre adversaire (Pokémon possédant déjà une carte Outil Pokémon exclus). (Si un effet de cette attaque est empêché, cette attaque est sans effet.)",
				'de-de': "Entferne 1 Pokémon-Ausrüstung, die an 1 Pokémon deines Gegners angelegt ist, und lege sie an ein anderes Pokémon deines Gegners (aber nicht an 1 Pokémon, an dem bereits 1 Pokémon-Ausrüstung angelegt ist) an. (Wenn ein Effekt dieses Angriffs verhindert wird, hat dieser Angriff keine Auswirkungen.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Flap",
				'fr-fr': "Battement",
				'de-de': "Flattern"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "If spotted, it will lure an unwary person into chasing it, then lose the pursuer on mountain trails."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87654,
				cardmarket: 278763
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278763,
				tcgplayer: 87654
			}
		},
	],

}

export default card
