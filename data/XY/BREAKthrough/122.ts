import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Ursaring",
		fr: "Ursaring",
		es: "Ursaring",
		it: "Ursaring",
		pt: "Ursaring",
		de: "Ursaring"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		217,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa",
		es: "Teddiursa",
		it: "Teddiursa",
		pt: "Teddiursa",
		de: "Teddiursa"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drag Off",
				fr: "Traîne",
				es: "Jalón",
				it: "Trascinato Via",
				pt: "Arrastar para Fora",
				de: "Wegzerren"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. This attack does 50 damage to the new Active Pokémon.",
				fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 50 dégâts au nouveau Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 50 puntos de daño al nuevo Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 50 danni al nuovo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente. Este ataque causa 50 de danos ao novo Pokémon Ativo.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Dieser Angriff fügt dem neuen Aktiven Pokémon 50 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swing Around",
				fr: "Balançoire",
				es: "Dar Vueltas",
				it: "Giravolta",
				pt: "Balanço",
				de: "Gegenschwung"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 40 danni in più.",
				pt: "Jogue 2 moedas. Este ataque causa 40 de danos adicionais para cada cara.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 40 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
