import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Torkoal V",
		fr: "Chartor V",
		es: "Torkoal V",
		it: "Torkoal V",
		pt: "Torkoal V",
		de: "Qurtel V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 210,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion Pillar",
				fr: "Pilastre de Combustion",
				es: "Columna Combustión",
				it: "Colonna di Fuoco",
				pt: "Coluna em Combustão",
				de: "Brandsäule"
			},
			effect: {
				en: "Discard the top card of your deck. If that card is a Fire Energy card, this attack does 90 more damage.",
				fr: "Défaussez la carte du dessus de votre deck. Si cette carte-là est une carte Énergie Fire, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Descarta la primera carta de tu baraja. Si es una carta de Energía Fire, este ataque hace 90 puntos de daño más.",
				it: "Scarta la prima carta del tuo mazzo. Se quella carta è una carta Energia Fire, questo attacco infligge 90 danni in più.",
				pt: "Descarte a carta de cima do seu baralho. Se aquela carta for uma carta de Energia Fire, este ataque causará 90 pontos de dano a mais.",
				de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Wenn jene Karte eine Fire-Energiekarte ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Steam Crush",
				fr: "Écrasement Vapeur",
				es: "Destrucción Vapor",
				it: "Vapore Distruttivo",
				pt: "Vapor Esmagador",
				de: "Dampfmalmer"
			},
			effect: {
				en: "Discard 2 Energy from your opponent's Active Pokémon.",
				fr: "Défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
				es: "Descarta 2 Energías del Pokémon Activo de tu rival.",
				it: "Scarta due Energie dal Pokémon attivo del tuo avversario.",
				pt: "Descarte 2 Energias do Pokémon Ativo do seu oponente.",
				de: "Lege 2 Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	suffix: "V",

	thirdParty: {
		cardmarket: 436289
	}
}

export default card
