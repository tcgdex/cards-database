import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Escavalier",
		fr: "Lançargot",
		es: "Escavalier",
		it: "Escavalier",
		pt: "Escavalier",
		de: "Cavalanzas"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		589,
	],
	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
				es: "Ataque Furia",
				it: "Furia",
				pt: "Ataque de Fúria",
				de: "Furienschlag"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Iron Tackle",
				fr: "Charge de Fer",
				es: "Bloqueo de Hierro",
				it: "Azione Ferrea",
				pt: "Golpe de Colisão Férreo",
				de: "Eisentackle"
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
				es: "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 30 danni a se stesso.",
				pt: "Este Pokémon causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
