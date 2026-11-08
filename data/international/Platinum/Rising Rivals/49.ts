import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Sharpedo",
		'fr-fr': "Sharpedo Niv. 43",
		'de-de': "Tohaido"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [319],

	hp: 90,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Energy Shark",
				'fr-fr': "Énergie requin",
				'de-de': "Hai-Energie"
			},
			effect: {
				'en-us': "If Sharpedo is your Active Pokémon and is damaged by an opponent's attack (even if Sharpedo is Knocked Out), flip a coin. If heads, discard an Energy card attached to the Attacking Pokémon.",
				'fr-fr': "Si Sharpedo est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Sharpedo est mis K.O), lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Attaquant.",
				'de-de': "Wenn Tohaido dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Tohaido dadurch kampfunfähig wird), wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am Angreifenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Machouille",
				'de-de': "Knirscher"
			},
			effect: {
				'en-us': "If an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage to that Pokémon until the end of your next turn.",
				'fr-fr': "Si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque lui inflige 40 dégâts supplémentaires jusqu'à la fin de votre prochain tour.",
				'de-de': "Wenn bis zum Ende deines nächsten Zuges ein Angriff dem Verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt dieser Angriff diesem Pokémon 40 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fang",
				'fr-fr': "Croc aiguisé",
				'de-de': "Scharfe Fänge"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278623,
				tcgplayer: 89100
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278623,
				tcgplayer: 89100
			}
		},
	],

}

export default card
