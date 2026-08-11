import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Empoleon",
		'fr-fr': "Pingoléon",
		'es-es': "Empoleon",
		'it-it': "Empoleon",
		'pt-br': "Empoleon",
		'de-de': "Impoleon"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Recall",
				'fr-fr': "Récupération",
				'es-es': "Recordar",
				'it-it': "Memoria",
				'pt-br': "Recordar",
				'de-de': "Abruf"
			},
			effect: {
				'en-us': "Choose an attack from 1 of this Pokémon’s previous Evolutions and use it as this attack.",
				'fr-fr': "Choisissez une attaque de l’une des précédentes Évolutions de ce Pokémon et utilisez-la en tant que cette attaque.",
				'es-es': "Elige 1 ataque de 1 de las Evoluciones anteriores de este Pokémon y úsalo para este ataque.",
				'it-it': "Scegli uno degli attacchi degli stadi evolutivi precedenti di questo Pokémon e usalo al posto di questo attacco.",
				'pt-br': "Escolha 1 dos ataques das Evoluções anteriores deste Pokémon e use-o como este ataque.",
				'de-de': "Wähle 1 Attacke aus einer vorangegangenen Entwicklung dieses Pokémon und setze sie als diese Attacke ein."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aquafall",
				'fr-fr': "Aquasplash",
				'es-es': "Catarata",
				'it-it': "Idrocascata",
				'pt-br': "Queda d’Água",
				'de-de': "Aquafall"
			},
			effect: {
				'en-us': "Discard all Energy from this Pokémon.",
				'fr-fr': "Défaussez toute l’Énergie de ce Pokémon.",
				'es-es': "Descarta todas las Energías de este Pokémon.",
				'it-it': "Scarta tutte le Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte toda a Energia deste Pokémon.",
				'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It swims as fast as a jet boat. The edges of its wings are sharp and can slice apart drifting ice.",
	},

	thirdParty: {
		cardmarket: 407929,
		tcgplayer: 201232
	}
}

export default card
