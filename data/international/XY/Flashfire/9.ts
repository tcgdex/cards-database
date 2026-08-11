import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Roserade",
		'fr-fr': "Roserade",
		'es-es': "Roserade",
		'it-it': "Roserade",
		'pt-br': "Roserade",
		'de-de': "Roserade"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		407,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Roselia",
		'fr-fr': "Rosélia",
		'es-es': "Roselia",
		'it-it': "Roselia",
		'pt-br': "Roselia",
		'de-de': "Roselia"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Whiplash",
				'fr-fr': "Fouet Furieux",
				'es-es': "Correazo",
				'it-it': "Scudisciata",
				'pt-br': "Chicote",
				'de-de': "Peitschenhieb"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue uma moeda até sair coroa. Para cada cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Lege pro \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Mega Drain",
				'fr-fr': "Méga-Sangsue",
				'es-es': "Megaagotar",
				'it-it': "Megassorbimento",
				'pt-br': "Megadreno",
				'de-de': "Megasauger"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 de danos deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Luring prey with a sweet scent, it uses poison whips on its arms to poison, bind, and finish off the prey.",
	},

	thirdParty: {
		cardmarket: 281492,
		tcgplayer: 91142
	}
}

export default card
