import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Illumise",
		'fr-fr': "Lumivole",
		'es-es': "Illumise",
		'it-it': "Illumise",
		'pt-br': "Illumise",
		'de-de': "Illumise"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		314,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Pheromotion",
				'fr-fr': "Phéromotion",
				'es-es': "Feromoción",
				'it-it': "Feromozione",
				'pt-br': "Feromovimento",
				'de-de': "Pheromigration"
			},
			effect: {
				'en-us': "Search your deck for a Grass Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez un Pokémon Grass dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja un Pokémon Grass, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo un Pokémon Grass, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure um Pokémon Grass em seu baralho, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach 1 Grass-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-Attaque",
				'es-es': "Ataque Rápido",
				'it-it': "Attacco Rapido",
				'pt-br': "Ataque Rápido",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza una moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: '20+',

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its fragrance attracts a swarm of Volbeat, so they draw over 200 patterns in the night sky.",
	},

	thirdParty: {
		cardmarket: 281346,
		tcgplayer: 86269
	}
}

export default card
