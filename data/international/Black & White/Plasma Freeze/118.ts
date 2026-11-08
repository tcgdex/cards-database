import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Sigilyph",
		'fr-fr': "Cryptéro",
		'es-es': "Sigilyph",
		'it-it': "Sigilyph",
		'pt-br': "Sigilyph",
		'de-de': "Symvolara"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		561,
	],

	hp: 90,

	types: [
		"Psychic",
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
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
			},
			effect: {
				'en-us': "Does 10 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
	},

	thirdParty: {
		cardmarket: 280996,
		tcgplayer: 89207
	}
}

export default card
