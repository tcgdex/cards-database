import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Entei",
		'fr-fr': "Entei",
		'es-es': "Entei",
		'it-it': "Entei",
		'pt-br': "Entei",
		'de-de': "Entei"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 130,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Fang",
				'fr-fr': "Crocs Feu",
				'es-es': "Colmillo Ígneo",
				'it-it': "Rogodenti",
				'pt-br': "Presas de Fogo",
				'de-de': "Feuerzahn"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Eruption",
				'fr-fr': "Éruption",
				'es-es': "Estallido",
				'it-it': "Eruzione",
				'pt-br': "Erupção",
				'de-de': "Eruption"
			},
			effect: {
				'en-us': "Each player discards the top card of their deck. This attack does 60 more damage for each Energy card discarded in this way.",
				'fr-fr': "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
				'es-es': "Cada jugador descarta la primera carta de su baraja. Este ataque hace 60 puntos de daño más por cada carta de Energía descartada de esta manera.",
				'it-it': "Ciascun giocatore scarta la prima carta del proprio mazzo. Questo attacco infligge 60 danni in più per ogni carta Energia scartata in questo modo.",
				'pt-br': "Cada jogador descarta a primeira carta do próprio baralho. Este ataque causa 60 pontos de dano a mais para cada carta de Energia descartada desta forma.",
				'de-de': "Jeder Spieler legt die oberste Karte seines Decks auf seinen Ablagestapel. Diese Attacke fügt 60 Schadenspunkte mehr mal der Anzahl der auf diese Weise auf den Ablagestapel gelegten Energiekarten zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said that when it roars, a volcano erupts somewhere around the globe.",
	},

	thirdParty: {
		cardmarket: 365687,
		tcgplayer: 178852
	}
}

export default card
