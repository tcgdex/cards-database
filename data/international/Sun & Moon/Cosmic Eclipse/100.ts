import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Cosmog",
		'fr-fr': "Cosmog",
		'es-es': "Cosmog",
		'it-it': "Cosmog",
		'pt-br': "Cosmog",
		'de-de': "Cosmog"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		789,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Unaware",
				'fr-fr': "Inconscient",
				'es-es': "Ignorante",
				'it-it': "Imprudenza",
				'pt-br': "Ignorante",
				'de-de': "Unkenntnis"
			},
			effect: {
				'en-us': "Prevent all effects of your opponent’s attacks, except damage, done to this Pokémon.",
				'fr-fr': "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
				'es-es': "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a este Pokémon.",
				'it-it': "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon.",
				'pt-br': "Previne todos os efeitos de ataques do seu oponente, exceto dano, causados a este Pokémon.",
				'de-de': "Verhindere alle Effekte von Attacken deines Gegners, außer Schaden, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Surprise Attack",
				'fr-fr': "Attaque Surprise",
				'es-es': "Ataque Sorpresa",
				'it-it': "Attacco a Sorpresa",
				'pt-br': "Ataque Surpresa",
				'de-de': "Überraschungsangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 10,

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
		'en-us': "Even though its helpless, gaseous body can be blown away by the slightest breeze, it doesn't seem to care.",
	},

	thirdParty: {
		cardmarket: 408144,
		tcgplayer: 201275
	}
}

export default card
