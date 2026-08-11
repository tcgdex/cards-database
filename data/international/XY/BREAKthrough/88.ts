import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Cacturne",
		'fr-fr': "Cacturne",
		'es-es': "Cacturne",
		'it-it': "Cacturne",
		'pt-br': "Cacturne",
		'de-de': "Noktuska"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		332,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea",
		'es-es': "Cacnea",
		'it-it': "Cacnea",
		'pt-br': "Cacnea",
		'de-de': "Tuska"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Derail",
				'fr-fr': "Déraillement",
				'es-es': "Descarrilar",
				'it-it': "Deragliamento",
				'pt-br': "Descarrilhar",
				'de-de': "Entgleisen"
			},
			effect: {
				'en-us': "Discard a Special Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía Especial unida al Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte uma Energia Especial ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Spezial-Energie auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pin Missile",
				'fr-fr': "Dard-Nuée",
				'es-es': "Pin Misil",
				'it-it': "Missilspillo",
				'pt-br': "Míssil de Espinhos",
				'de-de': "Nadelrakete"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 40 de danos vezes o número de caras.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Packs of them follow travelers through the desert until the travelers can no longer move.",
	},

	thirdParty: {
		cardmarket: 286334,
		tcgplayer: 107207
	}
}

export default card
