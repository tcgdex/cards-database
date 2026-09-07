import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Pidgeotto",
		'fr-fr': "Roucoups",
		'de-de': "Tauboga",
		'it-it': "Pidgeotto"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		17,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Pidgey",
		'fr-fr': "Roucool",
		'it-it': "Pidgey"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whirlwind",
				'fr-fr': "Cyclone",
				'de-de': "Wirbelwind",
				'it-it': "Turbine"

			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
				'fr-fr': "Si votre adversaire a au moins un Pokémon sur le Banc, il ou elle choisit l'1 d'eux et l'échange avec le Pokémon Défenseur. (Appliquez les dégâts avant d'échanger les Pokémon.)",
				'de-de': "Falls Dein Gegner irgendwelche Poke,mon auf der Bank hat, muss er eines von ihnen wählen und mit dem verteidigenden pokemon austauschen. (Füge die Schadenspunkte vor dem Auswechseln der Pokémon zu.)",
				'it-it': "Se il tuo avversario ha dei Pokémon in Panchina, deve scegliere uno e scambiarlo con il Pokémon Difensore. (Infliggi il danno prima di sostituire il Pokémon.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mirror Move",
				'fr-fr': "Mimique",
				'de-de': "Spiegeltrick",
				'it-it': "Speculmossa"
			},
			effect: {
				'en-us': "If Pidgeotto was attacked last turn, do the final result of that attack on Pidgeotto to the Defending Pokémon.",
				'fr-fr': "Si Roucoups a été attaqué pendant le tour précédent, appliquez le résultat final de cette attaque infligée à Roucoups sur le Pokémon Défenseur.",
				'de-de': "Falls Tauboga im letzten Ziug angegriffen wurde, füge dem verteidigenden Pokémon Schadenspunkte in Höhe der Endstärke dieses Angriffs zu.",
				'it-it': "Se Pidgeotto è stato attaccato durante il turno precedente, infliggi al Pokémon Difensore un numero di danni pari al risultato finale di quell'attacco."
			},

		},
	],

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273717,
				tcgplayer: 42363
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107017
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107017
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Very protective of its sprawling territory, this Pokémon will fiercely peck at any intruder.",
		'fr-fr': "Il protège son territoire avec ardeur et repousse à coups de bec tout intrus.",
		'it-it': "Istintivamente protettivo del suo ampio territorio di caccia, questo Pokémon si serve del suo becco appuntito per attaccare con forza qualsiasi nuovo intruso. LIV 36 N.17"
	}
}

export default card
