import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "White Kyurem",
		fr: "Kyurem Blanc",
		es: "Kyurem Blanco",
		it: "Kyurem Bianco",
		pt: "Kyurem Branco",
		de: "Weißes Kyurem"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 130,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Field Crush",
				fr: "Broyeur de Terrain",
				es: "Arrasamiento de Campo",
				it: "Invasione di Campo",
				pt: "Esmagamento de Campo",
				de: "Feldschlag"
			},
			effect: {
				en: "If your opponent has a Stadium card in play, discard it.",
				fr: "Si votre adversaire a une carte Stade en jeu, défaussez-la.",
				es: "Si tu rival tiene alguna carta de Estadio en juego, descártala.",
				it: "Se il tuo avversario ha una carta Stadio in gioco, scartala.",
				pt: "Se o seu oponente tiver uma carta de Estádio em jogo, descarte-a.",
				de: "Wenn dein Gegner eine Stadionkarte im Spiel hat, lege sie auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Freezing Flames",
				fr: "Flammes Glaçantes",
				es: "Llamas Glaciales",
				it: "Ghiacci Roventi",
				pt: "Chamas Congelantes",
				de: "Frostflammen"
			},
			effect: {
				en: "If this Pokémon has any Fire Energy attached to it, this attack does 80 more damage.",
				fr: "Si de l’Énergie Fire est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si este Pokémon tiene alguna Energía Fire unida a él, este ataque hace 80 puntos de daño más.",
				it: "Se questo Pokémon ha delle Energie Fire assegnate, questo attacco infligge 80 danni in più.",
				pt: "Se este Pokémon tiver alguma Energia Fire ligada a ele, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon mindestens 1 Fire-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
