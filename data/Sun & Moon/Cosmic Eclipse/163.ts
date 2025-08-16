import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
		es: "Kommo-o",
		it: "Kommo-o",
		pt: "Kommo-o",
		de: "Grandiras"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		784,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Shout of Power",
				fr: "Cri de Puissance",
				es: "Grito de Poder",
				it: "Urlotonante",
				pt: "Grito de Poder",
				de: "Mächtiger Aufruf"
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
				es: "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 60,

		},
		{
			cost: [
				"Lightning",
				"Fighting",
			],
			name: {
				en: "Scaly Uppercut",
				fr: "Uppercut Écaillé",
				es: "Gancho Escamoso",
				it: "Montante Squamoso",
				pt: "Gancho Escamoso",
				de: "Schuppiger Kinnhaken"
			},
			effect: {
				en: "You may discard a Pokémon Tool card from this Pokémon. If you do, this attack does 90 more damage.",
				fr: "Vous pouvez défausser une carte Outil Pokémon de ce Pokémon. Dans ce cas, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Puedes descartar 1 carta de Herramienta Pokémon de este Pokémon. Si lo haces, este ataque hace 90 puntos de daño más.",
				it: "Puoi scartare una carta Oggetto Pokémon assegnata a questo Pokémon. Se lo fai, questo attacco infligge 90 danni in più.",
				pt: "Você pode descartar 1 carta de Ferramenta Pokémon deste Pokémon. Se fizer isto, este ataque causará 90 pontos de dano a mais.",
				de: "Du kannst 1 Pokémon-Ausrüstung von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 408444,
		tcgplayer: 201647
	}
}

export default card
