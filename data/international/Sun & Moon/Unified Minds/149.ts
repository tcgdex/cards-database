import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
		'es-es': "Dragonair",
		'it-it': "Dragonair",
		'pt-br': "Dragonair",
		'de-de': "Dragonir"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 90,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				'en-us': "Twister",
				'fr-fr': "Ouragan",
				'es-es': "Ciclón",
				'it-it': "Tornado",
				'pt-br': "Twister",
				'de-de': "Windhose"
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, discard an Energy from your opponent’s Active Pokémon. If both of them are tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
				'es-es': "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival. Si ambas son cruz, este ataque no hace nada.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario. Se esce entrambe le volte croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 2 moedas. Para cada cara, descarte 1 Energia do Pokémon Ativo do seu oponente. Se as duas saírem coroa, este ataque não fará nada.",
				'de-de': "Wirf 2 Münzen. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. Wenn beide Münzen Zahl zeigen, hat diese Attacke keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Lakes where Dragonair live are filled with offerings from people, because they believe this Pokémon is able to control the weather.",
	},

	thirdParty: {
		cardmarket: 388537,
		tcgplayer: 195144
	}
}

export default card
