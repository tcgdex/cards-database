import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'es-es': "Beedrill",
		'it-it': "Beedrill",
		'pt-br': "Beedrill",
		'de-de': "Bibor"
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
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'es-es': "Kakuna",
		'it-it': "Kakuna",
		'pt-br': "Kakuna",
		'de-de': "Kokuna"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Allergic Shock",
				'fr-fr': "Choc Allergique",
				'es-es': "Reacción Alérgica",
				'it-it': "Allergishock",
				'pt-br': "Choque Alérgico",
				'de-de': "Allergischer Schock"
			},
			effect: {
				'en-us': "During your next turn, if the Defending Pokémon is damaged by an attack, it is Knocked Out.",
				'fr-fr': "Pendant votre prochain tour, si le Pokémon Défenseur subit les dégâts d'une attaque, il est mis K.O.",
				'es-es': "Durante tu próximo turno, si el Pokémon Defensor resulta dañado por un ataque, queda Fuera de Combate.",
				'it-it': "Durante il tuo prossimo turno, il Pokémon difensore viene messo KO se viene danneggiato da un attacco.",
				'pt-br': "Durante sua próxima vez de jogar, se o Pokémon Defensor for danificado por um ataque, ele será Nocauteado.",
				'de-de': "Wenn dem Verteidigenden Pokémon während deines nächsten Zuges Schaden durch einen Angriff zugefügt wird, wird es kampfunfähig."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Twineedle",
				'fr-fr': "Double-Dard",
				'es-es': "Doble Ataque",
				'it-it': "Doppio Ago",
				'pt-br': "Agulha Dupla",
				'de-de': "Duonadel"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 50 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	description: {
		'en-us': "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear.",
	},

	thirdParty: {
		cardmarket: 273534,
		tcgplayer: 95887
	}
}

export default card
