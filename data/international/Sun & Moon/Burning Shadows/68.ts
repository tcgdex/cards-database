import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Lunatone",
		'fr-fr': "Séléroc",
		'es-es': "Lunatone",
		'it-it': "Lunatone",
		'pt-br': "Lunatone",
		'de-de': "Lunastein"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		337,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Heal Block",
				'fr-fr': "Anti-Soin",
				'es-es': "Anticura",
				'it-it': "Anticura",
				'pt-br': "Bloqueio de Cura",
				'de-de': "Heilblockade"
			},
			effect: {
				'en-us': "If you have Solrock in play, Pokémon (both yours and your opponent’s) can’t be healed.",
				'fr-fr': "Si vous avez Solaroc en jeu, les Pokémon (les vôtres et ceux de votre adversaire) ne peuvent pas être soignés.",
				'es-es': "Si tienes a Solrock en juego, los Pokémon (tanto tuyos como de tu rival) no pueden ser curados.",
				'it-it': "Se hai Solrock in gioco, i Pokémon, sia tuoi che del tuo avversario, non possono essere curati.",
				'pt-br': "Se você possuir Solrock em jogo, os Pokémon (seus e do seu oponente) não poderão ser curados.",
				'de-de': "Wenn du Sonnfel im Spiel hast, können Pokémon (deine und die deines Gegners) nicht geheilt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Lunar Blast",
				'fr-fr': "Explosion Lunaire",
				'es-es': "Explosión Lunar",
				'it-it': "Furia Lunare",
				'pt-br': "Detonação Lunar",
				'de-de': "Mondsturm"
			},

			damage: 30,

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
		'en-us': "Because it turns active on nights of the full moon, it is said to have some link to the lunar phases.",
	},

	thirdParty: {
		cardmarket: 299470,
		tcgplayer: 138554
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
