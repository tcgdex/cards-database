import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Primarina GX",
		fr: "Oratoria GX",
		es: "Primarina GX",
		it: "Primarina GX",
		pt: "Primarina GX",
		de: "Primarene GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		730,
	],

	hp: 250,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Brionne",
		fr: "Otarlette",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bubble Beat",
				fr: "Bulle Bataille",
				es: "Golpe Burbuja",
				it: "Bollabotta",
				pt: "Batida de Bolha",
				de: "Blasenbeat"
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Water Energy attached to your Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à vos Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Water unida a tus Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata ai tuoi Pokémon.",
				pt: "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Water ligada aos seus Pokémon.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an deine Pokémon angelegten Water-Energien zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Roaring Seas",
				fr: "Flots Rugissants",
				es: "Mares Rugientes",
				it: "Mari Ruggenti",
				pt: "Oceanos Estrondosos",
				de: "Brausendes Meer"
			},
			effect: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 120,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Grand Echo GX",
				fr: "Écho Majestueux GX",
				es: "Gran Eco GX",
				it: "Eco Formidabile-GX",
				pt: "Eco Grandioso GX",
				de: "Gewaltiges Echo GX"
			},
			effect: {
				en: "Heal all damage from all of your Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Cura todos los puntos de daño a todos tus Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cura tutti i tuoi Pokémon da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				pt: "Cure todo o dano de todos os seus Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				de: "Heile allen Schaden bei jedem deiner Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
		cardmarket: 295353
	}
}

export default card
