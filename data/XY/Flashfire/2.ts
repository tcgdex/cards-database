import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
		es: "Metapod",
		it: "Metapod",
		pt: "Metapod",
		de: "Safcon"
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		11,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
		es: "Caterpie",
		it: "Caterpie",
		pt: "Caterpie",
		de: "Raupy"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Adaptive Evolution",
				fr: "Évolution Adaptative",
				es: "Evolución Adaptable",
				it: "Evoluzione Adattiva",
				pt: "Evolução Adaptativa",
				de: "Anpassungsfähige Entwicklung"
			},
			effect: {
				en: "This Pokémon can evolve during your first turn or the turn you play it.",
				fr: "Ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
				es: "Este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
				it: "Questo Pokémon può evolversi durante il tuo primo turno o durante il turno in cui l'hai giocato.",
				pt: "Este Pokémon poderá evoluir durante sua primeira vez de jogar ou na vez que você jogá-lo.",
				de: "Dieses Pokémon kann sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Harden",
				fr: "Armure",
				es: "Fortaleza",
				it: "Rafforzatore",
				pt: "Endurecer",
				de: "Härtner"
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon would be damaged by an attack, prevent that attack's damage done to this Pokémon if that damage is 60 or less.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon doit subir les dégâts d'une attaque, évitez les dégâts infligés à ce Pokémon si ces dégâts sont de 60 ou moins.",
				es: "Durante el próximo turno de tu rival, si este Pokémon fuera a resultar dañado por un ataque, evita el daño infligido por ese ataque a este Pokémon si el daño es de 60 puntos o menos.",
				it: "Durante il prossimo turno del tuo avversario, se questo Pokémon sta per essere danneggiato da un attacco, previeni il danno di quell'attacco inflitto a questo Pokémon se quel danno è 60 o meno.",
				pt: "Durante a próxima vez de jogar do seu oponente, se esse Pokémon estiver prestes a sofrer danos causados por um ataque, impedirá os danos causados pelo ataque a esse Pokémon se eles forem 60 ou menos.",
				de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch einen Angriff 60 oder weniger Schadenspunkte zugefügt würden, verhindere diesen Schaden."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
