import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong",
		de: "Bronzong"
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		437,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		it: "Bronzor",
		pt: "Bronzor",
		de: "Bronzel"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Metal Links",
				fr: "Liens Métalliques",
				es: "Eslabón Metálico",
				it: "Anelli Metallici",
				pt: "Elos de Metal",
				de: "Metallbündnis"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Metal Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Metal de votre pile de défausse à l'un de vos Pokémon de Banc.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Metal de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Metal dalla tua pila degli scarti.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Metal da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Metal-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 60,

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
	retreat: 3,



}

export default card
