import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		es: "Charizard",
		it: "Charizard",
		pt: "Charizard",
		de: "Glurak"
	},
	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 160,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Resolute Flame",
				fr: "Flamme Résolue",
				es: "Llama Firme",
				it: "Fiamma Risoluta",
				pt: "Chama Resoluta",
				de: "Resolute Flamme"
			},
			effect: {
				en: "This Pokémon’s attacks do 30 more damage to your opponent’s Active Pokémon for each of their Pokémon-GX and Pokémon-EX in play.",
				fr: "Les attaques de ce Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chacun de ses Pokémon-GX et Pokémon-EX en jeu.",
				es: "Los ataques de este Pokémon hacen 30 puntos de daño más al Pokémon Activo de tu rival por cada uno de sus Pokémon-GX y Pokémon-EX en juego.",
				it: "Gli attacchi di questo Pokémon infliggono 30 danni in più al Pokémon attivo del tuo avversario per ogni suo Pokémon-GX e Pokémon-EX in gioco.",
				pt: "Os ataques deste Pokémon causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente para cada um dos Pokémon-GX e Pokémon-EX dele(a) em jogo.",
				de: "Die Attacken dieses Pokémon fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr mal der Anzahl der Pokémon-GX und Pokémon-EX, die er im Spiel hat, zu."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fiery Blast",
				fr: "Explosion Ardente",
				es: "Explosión Ardiente",
				it: "Bomba Incendiaria",
				pt: "Explosão Ardente",
				de: "Feuerstoß"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
