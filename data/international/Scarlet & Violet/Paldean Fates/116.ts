import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [79],
	set: Set,

	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rest",
			'fr-fr': "Repos",
			'es-es': "Descanso",
			'it-it': "Riposo",
			'pt-br': "Descansar",
			'de-de': "Erholung"
		},

		effect: {
			'en-us': "This Pokémon is now Asleep. Heal 30 damage from it.",
			'fr-fr': "Ce Pokémon est maintenant Endormi. Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Este Pokémon pasa a estar Dormido. Cúrale 30 puntos de daño.",
			'it-it': "Questo Pokémon viene addormentato. Curalo da 30 danni.",
			'pt-br': "Este Pokémon agora está Adormecido. Cure 30 pontos de dano dele.",
			'de-de': "Dieses Pokémon schläft jetzt. Heile 30 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751655,
				tcgplayer: 534504,
				cardtrader: 274300
			}
		},
	],

	illustrator: "Taira Akitsu",

	description: {
		'en-us': "It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail.",
	},

}

export default card
