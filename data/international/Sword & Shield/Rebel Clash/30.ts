import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [467],

	name: {
		'en-us': "Magmortar",
		'fr-fr': "Maganon",
		'es-es': "Magmortar",
		'it-it': "Magmortar",
		'pt-br': "Magmortar",
		'de-de': "Magbrant"
	},

	illustrator: "Kazuma Koda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'it-it': "Magmar",
		'pt-br': "Magmar",
		'de-de': "Magmar"
	},

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Burst Punch",
				'fr-fr': "Poing d'Enfer",
				'es-es': "Puño Explosivo",
				'it-it': "Fiammatapugno",
				'pt-br': "Soco Rajada",
				'de-de': "Explosionshieb"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ground Burn",
				'fr-fr': "Brûlure au Sol",
				'es-es': "Quemar Suelo",
				'it-it': "Bruciaterra",
				'pt-br': "Queimar o Solo",
				'de-de': "Bodenbrand"
			},
			effect: {
				'en-us': "Each player discards the top card of their deck. This attack does 100 more damage for each Energy card discarded in this way.",
				'fr-fr': "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 100 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
				'es-es': "Cada jugador descarta la primera carta de su baraja. Este ataque hace 100 puntos de daño más por cada carta de Energía descartada de esta manera.",
				'it-it': "Ciascun giocatore scarta la prima carta del proprio mazzo. Questo attacco infligge 100 danni in più per ogni carta Energia scartata in questo modo.",
				'pt-br': "Cada jogador descarta a carta de cima do próprio baralho. Este ataque causa 100 pontos de dano a mais para cada carta de Energia descartada desta forma.",
				'de-de': "Jeder Spieler legt die oberste Karte seines Decks auf seinen Ablagestapel. Diese Attacke fügt für jede Energiekarte, die auf diese Weise auf den Ablagestapel gelegt wurde, 100 Schadenspunkte mehr zu."
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

	retreat: 3,
	hp: 140,
	types: ["Fire"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Magmortar takes down its enemies by shooting fireballs, which burn them to a blackened crisp. It avoids this method when hunting prey."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457608,
				tcgplayer: 213106
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457608,
				tcgplayer: 213106
			}
		},
	],
}

export default card
