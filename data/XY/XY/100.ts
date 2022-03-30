import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Tauros",
		fr: "Tauros",
		es: "Tauros",
		it: "Tauros",
		pt: "Tauros",
		de: "Tauros"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		128,
	],
	hp: 110,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				es: "Derribo",
				it: "Riduttore",
				pt: "Desmantelar",
				de: "Bodycheck"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
				es: "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 10 danni a se stesso.",
				pt: "Este Pokémon causa 10 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
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
				en: "Seething Anger",
				fr: "Furax",
				es: "Enfado Hirviente",
				it: "Furia Sfrenata",
				pt: "Fúria Fervente",
				de: "Schäumende Wut"
			},
			effect: {
				en: "Flip a coin for each damage counter on this Pokémon. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque marqueur de dégâts placé sur ce Pokémon. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 1 moneda por cada contador de daño en este Pokémon. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia una moneta per ogni segnalino danno presente su questo Pokémon. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue uma moeda para cada contador de danos neste Pokémon. Esse ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
