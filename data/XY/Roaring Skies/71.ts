import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Swellow",
		fr: "Hélédelle",
		es: "Swellow",
		it: "Swellow",
		pt: "Swellow",
		de: "Schwalboss"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		277,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Taillow",
		fr: "Nirondelle",
		es: "Taillow",
		it: "Taillow",
		pt: "Taillow",
		de: "Schwalbini"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
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
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aerial Ace",
				fr: "Aéropique",
				es: "Golpe Aéreo",
				it: "Aeroassalto",
				pt: "Ás dos Ares",
				de: "Aero-Ass"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

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

	retreat: 1,

	thirdParty: {
		cardmarket: 282739,
		tcgplayer: 98107
	}
}

export default card
