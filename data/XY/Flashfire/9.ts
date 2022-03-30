import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
		es: "Roserade",
		it: "Roserade",
		pt: "Roserade",
		de: "Roserade"
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
		en: "Roselia",
		fr: "Rosélia",
		es: "Roselia",
		it: "Roselia",
		pt: "Roselia",
		de: "Roselia"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Whiplash",
				fr: "Fouet Furieux",
				es: "Correazo",
				it: "Scudisciata",
				pt: "Chicote",
				de: "Peitschenhieb"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue uma moeda até sair coroa. Para cada cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Lege pro \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Mega Drain",
				fr: "Méga-Sangsue",
				es: "Megaagotar",
				it: "Megassorbimento",
				pt: "Megadreno",
				de: "Megasauger"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				es: "Cura 20 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 20 danni.",
				pt: "Cure 20 de danos deste Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
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



}

export default card
