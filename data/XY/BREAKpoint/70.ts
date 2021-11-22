import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
		es: "Garchomp",
		it: "Garchomp",
		pt: "Garchomp",
		de: "Knakrack"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Turbo Assault",
				fr: "Assaut Turbo",
				es: "Turboasalto",
				it: "Assalto Repentino",
				pt: "Turbo Ataque",
				de: "Turboüberfall"
			},
			effect: {
				en: "Attach an Energy card from your discard pile to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie de votre pile de défausse à l'un de vos Pokémon.",
				es: "Une 1 carta de Energía de tu pila de descartes a 1 de tus Pokémon.",
				it: "Assegna a uno dei tuoi Pokémon una carta Energia dalla tua pila degli scarti.",
				pt: "Ligue um card de Energia da sua pilha de descarte a 1 dos seus Pokémon.",
				de: "Lege 1 Energiekarte von deinem Ablagestapel an 1 deiner Pokémon an."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Bite Off",
				fr: "Arrachage",
				es: "Despedazar",
				it: "Addentare",
				pt: "Mordida Estraçalhante",
				de: "Abbeißen"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 80 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-EX, este ataque hace 80 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, questo attacco infligge 80 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, este ataque causará 80 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
