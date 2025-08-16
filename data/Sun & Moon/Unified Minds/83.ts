import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Uxie",
		fr: "Créhelf",
		es: "Uxie",
		it: "Uxie",
		pt: "Uxie",
		de: "Selfe"
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
				en: "Secret Territory",
				fr: "Territoire Secret",
				es: "Territorio Secreto",
				it: "Territorio Segreto",
				pt: "Território Secreto",
				de: "Geheimes Territorium"
			},
			effect: {
				en: "If you have Mesprit and Azelf in play, apply Weakness for each Pokémon (both yours and your opponent’s) as ×4 instead.",
				fr: "Si vous avez Créfollet et Créfadet en jeu, la Faiblesse de chaque Pokémon (les vôtres et ceux de votre adversaire) est multipliée par 4.",
				es: "Si tienes a Mesprit y Azelf en juego, aplica una Debilidad de x 4 a cada Pokémon (tanto tuyos como de tu rival).",
				it: "Se hai Mesprit e Azelf in gioco, la debolezza di tutti i Pokémon, sia tuoi che del tuo avversario, diventa x4.",
				pt: "Se você tiver Mesprit e Azelf em jogo, aplique Fraqueza a cada Pokémon (seus e do seu oponente) de ×4.",
				de: "Wenn du Vesprit und Tobutz im Spiel hast, wende für alle Pokémon (deine und die deines Gegners) Schwäche in Höhe von ×4 an."
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
				en: "Psyshot",
				fr: "Piqûre Psy",
				es: "Disparo Psi",
				it: "Psicosparo",
				pt: "Tiro Psíquico",
				de: "Psychoschuss"
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

	thirdParty: {
		cardmarket: 388227,
		tcgplayer: 195013
	}
}

export default card
