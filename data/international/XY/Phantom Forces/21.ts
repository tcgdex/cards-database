import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Jellicent",
		'fr-fr': "Moyade",
		'es-es': "Jellicent",
		'it-it': "Jellicent",
		'pt-br': "Jellicent",
		'de-de': "Apoquallyp"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		593,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Frillish",
		'fr-fr': "Viskuse",
		'es-es': "Frillish",
		'it-it': "Frillish",
		'pt-br': "Frillish",
		'de-de': "Quabbel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Meddling",
				'fr-fr': "Ingérence",
				'es-es': "Intromisión",
				'it-it': "Intromissione",
				'pt-br': "Intromissão",
				'de-de': "Einmischen"
			},
			effect: {
				'en-us': "Attach 3 Energy cards from your opponent's discard pile to his or her Pokémon in any way you like.",
				'fr-fr': "Attachez 3 cartes Énergie de la pile de défausse de votre adversaire à ses Pokémon, de la manière que vous voulez.",
				'es-es': "Une 3 cartas de Energía de la pila de descartes de tu rival a sus Pokémon de la manera que desees.",
				'it-it': "Assegna a piacimento ai Pokémon del tuo avversario tre carte Energia dalla sua pila degli scarti.",
				'pt-br': "Ligue 3 cards de Energia da pilha de descarte do seu oponente ao Pokémon desse oponente do jeito que desejar.",
				'de-de': "Lege 3 Energiekarten vom Ablagestapel deines Gegners beliebig an die Pokémon deines Gegners an."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ensnaring Spray",
				'fr-fr': "Jet Pénalisant",
				'es-es': "Espray Atrapador",
				'it-it': "Irretispruzzo",
				'pt-br': "Spray Ardiloso",
				'de-de': "Betörender Sprühnebel"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Esse ataque causa 10 de danos adicionais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist."
			},
			damage: "50+",

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
		'en-us': "Its body is mostly seawater. It's said there's a castle of ships Jellicent have sunk on the seafloor.",
	},

	thirdParty: {
		cardmarket: 281825,
		tcgplayer: 94154
	}
}

export default card
