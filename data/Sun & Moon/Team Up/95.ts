import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Yveltal",
		fr: "Yveltal",
		es: "Yveltal",
		it: "Yveltal",
		pt: "Yveltal",
		de: "Yveltal"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Derail",
				fr: "Déraillement",
				es: "Descarrilar",
				it: "Deragliamento",
				pt: "Descarrilhar",
				de: "Entgleisen"
			},
			effect: {
				en: "Discard a Special Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Clutch",
				fr: "Serre",
				es: "Embrague",
				it: "Grinfie",
				pt: "Agarramento",
				de: "Greifer"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 369025
	}
}

export default card
