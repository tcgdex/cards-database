import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Gabite",
		fr: "Carmache",
		es: "Gabite",
		it: "Gabite",
		pt: "Gabite",
		de: "Knarksel"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		444,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
		es: "Gible",
		it: "Gible",
		pt: "Gible",
		de: "Kaumalat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
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
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288244,
		tcgplayer: 111608
	}
}

export default card
