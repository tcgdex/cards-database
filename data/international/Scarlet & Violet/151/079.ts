import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [79],
	set: Set,

	name: {
		'fr-fr': "Ramoloss",
		'en-us': "Slowpoke",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Bain de Mer",
			'en-us': "Sea Bathing",
			'es-es': "Baño de Mar",
			'it-it': "Bagno al Mare",
			'pt-br': "Banho de Mar",
			'de-de': "Baden im Meer"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de ce Pokémon, et il guérit de tous les États Spéciaux.",
			'en-us': "Heal 30 damage from this Pokémon, and it recovers from all Special Conditions.",
			'es-es': "Cura 30 puntos de daño a este Pokémon, y este se recupera de todas las Condiciones Especiales.",
			'it-it': "Cura questo Pokémon da 30 danni. Questo Pokémon guarisce da tutte le condizioni speciali.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon e ele se recupera de todas as Condições Especiais.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon, und es erholt sich von allen Speziellen Zuständen."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Coup d'Boule",
			'en-us': "Headbutt",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It is incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733674,
				tcgplayer: 516650,
				cardtrader: 261149
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733674,
				tcgplayer: 516650,
				cardtrader: 261149
			}
		},
	],

	illustrator: "OKACHEKE",

	
}

export default card
