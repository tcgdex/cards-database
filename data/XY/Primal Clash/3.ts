import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
		es: "Beedrill",
		it: "Beedrill",
		pt: "Beedrill",
		de: "Bibor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
		es: "Kakuna",
		it: "Kakuna",
		pt: "Kakuna",
		de: "Kokuna"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Allergic Shock",
				fr: "Choc Allergique",
				es: "Reacción Alérgica",
				it: "Allergishock",
				pt: "Choque Alérgico",
				de: "Allergischer Schock"
			},
			effect: {
				en: "During your next turn, if the Defending Pokémon is damaged by an attack, it is Knocked Out.",
				fr: "Pendant votre prochain tour, si le Pokémon Défenseur subit les dégâts d'une attaque, il est mis K.O.",
				es: "Durante tu próximo turno, si el Pokémon Defensor resulta dañado por un ataque, queda Fuera de Combate.",
				it: "Durante il tuo prossimo turno, il Pokémon difensore viene messo KO se viene danneggiato da un attacco.",
				pt: "Durante sua próxima vez de jogar, se o Pokémon Defensor for danificado por um ataque, ele será Nocauteado.",
				de: "Wenn dem Verteidigenden Pokémon während deines nächsten Zuges Schaden durch einen Angriff zugefügt wird, wird es kampfunfähig."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Twineedle",
				fr: "Double-Dard",
				es: "Doble Ataque",
				it: "Doppio Ago",
				pt: "Agulha Dupla",
				de: "Duonadel"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Esse ataque causa 50 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 273534
	}
}

export default card
