import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Kommo-o",
		'fr-fr': "Ékaïser",
		'es-es': "Kommo-o",
		'it-it': "Kommo-o",
		'pt-br': "Kommo-o",
		'de-de': "Grandiras"
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
		'en-us': "Hakamo-o",
		'fr-fr': "Écaïd",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Shout of Power",
				'fr-fr': "Cri de Puissance",
				'es-es': "Grito de Poder",
				'it-it': "Urlotonante",
				'pt-br': "Grito de Poder",
				'de-de': "Mächtiger Aufruf"
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 60,

		},
		{
			cost: [
				"Lightning",
				"Fighting",
			],
			name: {
				'en-us': "Scaly Uppercut",
				'fr-fr': "Uppercut Écaillé",
				'es-es': "Gancho Escamoso",
				'it-it': "Montante Squamoso",
				'pt-br': "Gancho Escamoso",
				'de-de': "Schuppiger Kinnhaken"
			},
			effect: {
				'en-us': "You may discard a Pokémon Tool card from this Pokémon. If you do, this attack does 90 more damage.",
				'fr-fr': "Vous pouvez défausser une carte Outil Pokémon de ce Pokémon. Dans ce cas, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Puedes descartar 1 carta de Herramienta Pokémon de este Pokémon. Si lo haces, este ataque hace 90 puntos de daño más.",
				'it-it': "Puoi scartare una carta Oggetto Pokémon assegnata a questo Pokémon. Se lo fai, questo attacco infligge 90 danni in più.",
				'pt-br': "Você pode descartar 1 carta de Ferramenta Pokémon deste Pokémon. Se fizer isto, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Du kannst 1 Pokémon-Ausrüstung von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 90 Schadenspunkte mehr zu."
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

	description: {
		'en-us': "When it howls after finishing off its prey, the metallic sounds of its celebrating comrades can be heard from all around.",
	},

	thirdParty: {
		cardmarket: 408444,
		tcgplayer: 201647
	}
}

export default card
