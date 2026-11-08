import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Uxie",
		'fr-fr': "Créhelf",
		'es-es': "Uxie",
		'it-it': "Uxie",
		'pt-br': "Uxie",
		'de-de': "Selfe"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		480,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Secret Territory",
				'fr-fr': "Territoire Secret",
				'es-es': "Territorio Secreto",
				'it-it': "Territorio Segreto",
				'pt-br': "Território Secreto",
				'de-de': "Geheimes Territorium"
			},
			effect: {
				'en-us': "If you have Mesprit and Azelf in play, apply Weakness for each Pokémon (both yours and your opponent’s) as ×4 instead.",
				'fr-fr': "Si vous avez Créfollet et Créfadet en jeu, la Faiblesse de chaque Pokémon (les vôtres et ceux de votre adversaire) est multipliée par 4.",
				'es-es': "Si tienes a Mesprit y Azelf en juego, aplica una Debilidad de x 4 a cada Pokémon (tanto tuyos como de tu rival).",
				'it-it': "Se hai Mesprit e Azelf in gioco, la debolezza di tutti i Pokémon, sia tuoi che del tuo avversario, diventa x4.",
				'pt-br': "Se você tiver Mesprit e Azelf em jogo, aplique Fraqueza a cada Pokémon (seus e do seu oponente) de ×4.",
				'de-de': "Wenn du Vesprit und Tobutz im Spiel hast, wende für alle Pokémon (deine und die deines Gegners) Schwäche in Höhe von ×4 an."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psyshot",
				'fr-fr': "Piqûre Psy",
				'es-es': "Disparo Psi",
				'it-it': "Psicosparo",
				'pt-br': "Tiro Psíquico",
				'de-de': "Psychoschuss"
			},

			damage: 30,

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
		'en-us': "Known as \"The Being of Knowledge.\" It is said that it can wipe out the memory of those who see its eyes.",
	},

	thirdParty: {
		cardmarket: 388227,
		tcgplayer: 195013
	}
}

export default card
