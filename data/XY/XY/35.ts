import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		131,
	],
	hp: 110,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Seafaring",
				fr: "Voyage en Mer",
				es: "Náutico",
				it: "Oceandante",
				pt: "Viagem Marítima",
				de: "Seefahrer"
			},
			effect: {
				en: "Flip 3 coins. For each heads, attach a Water Energy card from your discard pile to your Benched Pokémon in any way you like.",
				fr: "Lancez 3 pièces. Pour chaque côté face, attachez une carte Énergie Water de votre pile de défausse à vos Pokémon de Banc, de la manière que vous voulez.",
				es: "Lanza 3 monedas. Por cada cara, une 1 carta de Energía Water de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
				it: "Lancia tre volte una moneta. Ogni volta che esce testa, assegna a piacimento ai tuoi Pokémon in panchina una carta Energia Water dalla tua pila degli scarti.",
				pt: "Jogue 3 moedas. Para cada cara, ligue um card de Energia Water da sua pilha de descarte no seu Pokémon no Banco do jeito que desejar.",
				de: "Wirf 3 Münzen. Lege pro \"Kopf\" 1 Water-Energiekarte von deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				es: "Hidrobomba",
				it: "Idropompa",
				pt: "Jato d'Água",
				de: "Hydropumpe"
			},
			effect: {
				en: "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Esse ataque causa 20 de danos adicionais para cada Energia Water ligada a este Pokémon.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Water-Energie zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
