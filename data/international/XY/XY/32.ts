import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Cloyster",
		'fr-fr': "Crustabri",
		'es-es': "Cloyster",
		'it-it': "Cloyster",
		'pt-br': "Cloyster",
		'de-de': "Austos"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		91,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Shellder",
		'fr-fr': "Kokiyas",
		'es-es': "Shellder",
		'it-it': "Shellder",
		'pt-br': "Shellder",
		'de-de': "Muschas"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Clamp Crush",
				'fr-fr': "Pince Broyeuse",
				'es-es': "Machaque Tenaza",
				'it-it': "Rompimorsa",
				'pt-br': "Captura Esmagadora",
				'de-de': "Quetschklammer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed and discard an Energy attached to that Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie lui étant attachée.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado, y descartas 1 Energía unida a ese Pokémon.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e scarti un'Energia assegnata a quel Pokémon.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado e uma Energia ligada a ele deverá ser descartada.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert. Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Spike Cannon",
				'fr-fr': "Picanon",
				'es-es': "Clavo Cañón",
				'it-it': "Sparalance",
				'pt-br': "Canhão de Espinhos",
				'de-de': "Dornkanone"
			},
			effect: {
				'en-us': "Flip 5 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 5 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 5 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia cinque volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 5 moedas. Esse ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 5 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.",
	},

	thirdParty: {
		cardmarket: 281369,
		tcgplayer: 84375
	}
}

export default card
