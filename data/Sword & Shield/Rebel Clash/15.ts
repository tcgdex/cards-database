import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [709],

	name: {
		en: "Trevenant",
		fr: "Desséliande",
		es: "Trevenant",
		it: "Trevenant",
		pt: "Trevenant",
		de: "Trombork"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
		es: "Phantump",
		it: "Phantump",
		pt: "Phantump",
		de: "Paragoni"
	},

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
				es: "Bomba Germen",
				it: "Semebomba",
				pt: "Bomba de Sementes",
				de: "Samenbomben"
			},

			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Shadow Cage",
				fr: "Cage d'Ombre",
				es: "Jaula Sombría",
				it: "Gabbiombra",
				pt: "Gaiola Sombria",
				de: "Schattenverlies"
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 130,
	types: ["Grass"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "People fear it due to a belief that it devours any who try to cut down trees in its forest, but to the Pokémon it shares its woods with, it's kind."
	},

	thirdParty: {
		cardmarket: 457468,
		tcgplayer: 213085
	}
}

export default card
