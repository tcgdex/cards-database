import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Séléroc",
		es: "Lunatone",
		it: "Lunatone",
		pt: "Lunatone",
		de: "Lunastein"
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
				en: "Heal Block",
				fr: "Anti-Soin",
				es: "Anticura",
				it: "Anticura",
				pt: "Bloqueio de Cura",
				de: "Heilblockade"
			},
			effect: {
				en: "If you have Solrock in play, Pokémon (both yours and your opponent’s) can’t be healed.",
				fr: "Si vous avez Solaroc en jeu, les Pokémon (les vôtres et ceux de votre adversaire) ne peuvent pas être soignés.",
				es: "Si tienes a Solrock en juego, los Pokémon (tanto tuyos como de tu rival) no pueden ser curados.",
				it: "Se hai Solrock in gioco, i Pokémon, sia tuoi che del tuo avversario, non possono essere curati.",
				pt: "Se você possuir Solrock em jogo, os Pokémon (seus e do seu oponente) não poderão ser curados.",
				de: "Wenn du Sonnfel im Spiel hast, können Pokémon (deine und die deines Gegners) nicht geheilt werden."
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
				en: "Lunar Blast",
				fr: "Explosion Lunaire",
				es: "Explosión Lunar",
				it: "Furia Lunare",
				pt: "Detonação Lunar",
				de: "Mondsturm"
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

	thirdParty: {
		cardmarket: 299470,
		tcgplayer: 138554
	}
}

export default card
