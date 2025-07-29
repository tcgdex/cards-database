import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Heatran",
		fr: "Heatran",
		es: "Heatran",
		it: "Heatran",
		pt: "Heatran",
		de: "Heatran"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 130,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Drop",
				fr: "Démolition Contrôlée",
				es: "Caída de Acero",
				it: "Cadutacciaio",
				pt: "Queda de Aço",
				de: "Stahlsturz"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 40 more damage.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 40 puntos de daño más.",
				it: "Se c'è in gioco una carta Stadio, questo attacco infligge 40 danni in più.",
				pt: "Se houver algum card de Estádio em jogo, este ataque causará 40 de danos adicionais.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steam Blast",
				fr: "Geyser de Vapeur",
				es: "Explosión Vapor",
				it: "Sbuffo di Vapore",
				pt: "Explosão de Vapor",
				de: "Dampfstrahl"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281869
	}
}

export default card
