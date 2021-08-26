import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Zygarde EX",
		fr: "Zygarde EX",
		es: "Zygarde EX",
		it: "Zygarde GX",
		pt: "Zygarde EX",
		de: "Zygarde EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 190,
	types: [
		"Fighting",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Land’s Pulse",
				fr: "Vibration Terrestre",
				es: "Pulso Telúrico",
				it: "Pulsazione Tellurica",
				pt: "Pulso da Terra",
				de: "Bodenpuls"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 20 more damage.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 20 puntos de daño más.",
				it: "Se c’è in gioco una carta Stadio, questo attacco infligge 20 danni in più.",
				pt: "Se houver algum card de Estádio em jogo, este ataque causará 20 de danos adicionais.",
				de: "Wenn 1 Stadionkarte im Spiel ist, fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Cell Storm",
				fr: "Tempête Cellulaire",
				es: "Tormenta Celular",
				it: "Tempesta Cellulare",
				pt: "Célula de Tempestade",
				de: "Zellsturm"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 de danos deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Land’s Wrath",
				fr: "Force Chtonienne",
				es: "Fuerza Telúrica",
				it: "Forza Tellurica",
				pt: "Ira da Terra",
				de: "Bodengewalt"
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
