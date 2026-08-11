import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune",
		'es-es': "Suicune",
		'it-it': "Suicune",
		'pt-br': "Suicune",
		'de-de': "Suicune"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		245,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Safeguard",
				'fr-fr': "Rune Protect",
				'es-es': "Velo Sagrado",
				'it-it': "Salvaguardia",
				'pt-br': "Salvaguarda",
				'de-de': "Bodyguard"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX.",
				'fr-fr': "Évitez tous les effets d’attaques (y compris les dégâts) infligés à ce Pokémon par des Pokémon-EX.",
				'es-es': "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por Pokémon-EX.",
				'it-it': "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon da Pokémon-EX.",
				'pt-br': "Impede todos os efeitos de ataques, inclusive danos, causados a este Pokémon por Pokémon-EX.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch Pokémon-EX zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Beam",
				'fr-fr': "Onde Boréale",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It races around the world to purify fouled water. It dashes away with the north wind.",
	},

	thirdParty: {
		cardmarket: 281041,
		tcgplayer: 89607
	}
}

export default card
