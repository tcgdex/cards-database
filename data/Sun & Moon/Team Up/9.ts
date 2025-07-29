import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		es: "Pinsir",
		it: "Pinsir",
		pt: "Pinsir",
		de: "Pinsir"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 120,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Grip and Squeeze",
				fr: "Empoigne Puissante",
				es: "Coger y Estrujar",
				it: "Acchiappa e Spremi",
				pt: "Agarrar e Espremer",
				de: "Grapschen und Quetschen"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guillotine Hug",
				fr: "Étreinte Guillotine",
				es: "Abrazo Guillotina",
				it: "Abbraccio Ghigliottina",
				pt: "Abraço de Guilhotina",
				de: "Guillotinengriff"
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, your opponent’s Active Pokémon is Knocked Out.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Actif de votre adversaire est mis K.O.",
				es: "Lanza 2 monedas. Si ambas son cara, el Pokémon Activo de tu rival queda Fuera de Combate.",
				it: "Lancia due volte una moneta. Se esce entrambe le volte testa, il Pokémon attivo del tuo avversario viene messo KO.",
				pt: "Jogue 2 moedas. Se as duas saírem cara, o Pokémon Ativo do seu oponente será Nocauteado.",
				de: "Wirf 2 Münzen. Wenn beide Münzen Kopf zeigen, ist das Aktive Pokémon deines Gegners kampfunfähig."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 368942
	}
}

export default card
