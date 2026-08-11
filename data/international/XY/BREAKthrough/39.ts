import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'es-es': "Snover",
		'it-it': "Snover",
		'pt-br': "Snover",
		'de-de': "Shnebedeck"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		459,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Powder Snow",
				'fr-fr': "Poudreuse",
				'es-es': "Nieve Polvo",
				'it-it': "Polneve",
				'pt-br': "Neve em Pó",
				'de-de': "Pulverschnee"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Smash",
				'fr-fr': "Double Broiement",
				'es-es': "Golpe Doble",
				'it-it': "Colpo Duplice",
				'pt-br': "Bordoada Dupla",
				'de-de': "Doppelstoß"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "In the spring, it grows berries with the texture of frozen treats around its belly.",
	},

	thirdParty: {
		cardmarket: 286285,
		tcgplayer: 107158
	}
}

export default card
