import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		es: "Sudowoodo",
		it: "Sudowoodo",
		pt: "Sudowoodo",
		de: "Mogelbaum"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
				es: "Patada Baja",
				it: "Colpo Basso",
				pt: "Rasteira",
				de: "Fußkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Territorial Strike",
				fr: "Frappe Territoriale",
				es: "Golpe Territorial",
				it: "Attacco Limitrofo",
				pt: "Golpe Territorial",
				de: "Revierschlag"
			},
			effect: {
				en: "If you don’t have a Stadium card in play, this attack does nothing.",
				fr: "Si vous n’avez pas de carte Stade en jeu, cette attaque ne fait rien.",
				es: "Si no tienes 1 carta de Estadio en juego, este ataque no hace nada.",
				it: "Se non hai una carta Stadio in gioco, questo attacco non ha effetto.",
				pt: "Se você não tiver uma carta de Estádio em jogo, este ataque não fará nada.",
				de: "Wenn du keine Stadionkarte im Spiel hast, hat diese Attacke keine Auswirkungen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2
}

export default card
