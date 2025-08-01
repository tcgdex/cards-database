import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		603,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dynamotor",
				fr: "Dynamoteur",
				es: "Dinamotor",
				it: "Dinamotore",
				pt: "Dinamotor",
				de: "Dynamotor"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Lightning de votre pile de défausse à 1 de vos Pokémon de Banc.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes unir una carta de Energía Lightning de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Lightning dalla tua pila degli scarti.",
				pt: "Uma vez na sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Lightning da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Lightning-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electric Ball",
				fr: "Boule de Foudre",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280163,
		tcgplayer: 85067
	}
}

export default card
