import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Jellicent",
		fr: "Moyade",
		es: "Jellicent",
		it: "Jellicent",
		pt: "Jellicent",
		de: "Apoquallyp"
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
		en: "Frillish",
		fr: "Viskuse",
		es: "Frillish",
		it: "Frillish",
		pt: "Frillish",
		de: "Quabbel"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Meddling",
				fr: "Ingérence",
				es: "Intromisión",
				it: "Intromissione",
				pt: "Intromissão",
				de: "Einmischen"
			},
			effect: {
				en: "Attach 3 Energy cards from your opponent's discard pile to his or her Pokémon in any way you like.",
				fr: "Attachez 3 cartes Énergie de la pile de défausse de votre adversaire à ses Pokémon, de la manière que vous voulez.",
				es: "Une 3 cartas de Energía de la pila de descartes de tu rival a sus Pokémon de la manera que desees.",
				it: "Assegna a piacimento ai Pokémon del tuo avversario tre carte Energia dalla sua pila degli scarti.",
				pt: "Ligue 3 cards de Energia da pilha de descarte do seu oponente ao Pokémon desse oponente do jeito que desejar.",
				de: "Lege 3 Energiekarten vom Ablagestapel deines Gegners beliebig an die Pokémon deines Gegners an."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ensnaring Spray",
				fr: "Jet Pénalisant",
				es: "Espray Atrapador",
				it: "Irretispruzzo",
				pt: "Spray Ardiloso",
				de: "Betörender Sprühnebel"
			},
			effect: {
				en: "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 10 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 10 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Esse ataque causa 10 de danos adicionais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist."
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



}

export default card
