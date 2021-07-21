import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Keldeo",
		fr: "Keldeo",
		es: "Keldeo",
		it: "Keldeo",
		pt: "Keldeo",
		de: "Keldeo"
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		647,
	],
	hp: 110,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bail Out",
				fr: "Renflouage",
				es: "Sacar de Apuros",
				it: "Soccorso",
				pt: "Salvamento",
				de: "Freilassen"
			},
			effect: {
				en: "Put a Water Pokémon from your discard pile into your hand.",
				fr: "Ajoutez un Pokémon Water de votre pile de défausse à votre main.",
				es: "Pon 1 Pokémon Water de tu pila de descartes en tu mano.",
				it: "Prendi un Pokémon Water dalla tua pila degli scarti e aggiungilo alle carte che hai in mano.",
				pt: "Coloque 1 Pokémon Water da sua pilha de descarte na sua mão.",
				de: "Nimm 1 Water-Pokémon aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Resolute Blade",
				fr: "Lame Décidée",
				es: "Cuchilla Resuelta",
				it: "Lama Risoluta",
				pt: "Lâmina Resoluta",
				de: "Resolute Klinge"
			},
			effect: {
				en: "This attack does 20 more damage for each of your opponent’s Benched Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Pokémon auf der Bank deines Gegners zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
