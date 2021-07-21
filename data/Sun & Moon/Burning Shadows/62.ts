import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Palossand",
		fr: "Trépassable",
		es: "Palossand",
		it: "Palossand",
		pt: "Palossand",
		de: "Colossand"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		770,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Sandygast",
		fr: "Bacabouh",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Tomb",
				fr: "Tourbi-Sable",
				es: "Bucle Arena",
				it: "Sabbiotomba",
				pt: "Fosso de Areia",
				de: "Sandgrab"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dust Storm",
				fr: "Tempête de Poussière",
				es: "Tormenta de Polvo",
				it: "Tempesta di Polvere",
				pt: "Tempestade de Poeira",
				de: "Staubsturm"
			},
			effect: {
				en: "Discard all cards from both Active Pokémon.",
				fr: "Défaussez toutes les cartes attachées aux deux Pokémon Actifs.",
				es: "Descarta todas las cartas de ambos Pokémon Activos.",
				it: "Scarta tutte le carte assegnate a ciascun Pokémon attivo.",
				pt: "Descarte todas as cartas de ambos os Pokémon Ativos.",
				de: "Lege alle Karten von beiden Aktiven Pokémon auf den Ablagestapel."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
