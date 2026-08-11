import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Ludicolo",
		'fr-fr': "Ludicolo",
		'es-es': "Ludicolo",
		'it-it': "Ludicolo",
		'pt-br': "Ludicolo",
		'de-de': "Kappalores"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		272,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'es-es': "Lombre",
		'it-it': "Lombre",
		'pt-br': "Lombre",
		'de-de': "Lombrero"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Captivating Rhythm",
				'fr-fr': "Rythme Envoûtant",
				'es-es': "Ritmo Cautivador",
				'it-it': "Ritmo Accattivante",
				'pt-br': "Ritmo Cativante",
				'de-de': "Fesselnder Rhythmus"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode jogar uma moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Tausche bei \"Kopf\" 1 Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Solar Ray",
				'fr-fr': "Rayonnement Solaire",
				'es-es': "Centello Solar",
				'it-it': "Raggiosolare",
				'pt-br': "Clarão Solar",
				'de-de': "Sonnenstrahlen"
			},
			effect: {
				'en-us': "Heal 20 damage from each of your Pokémon.",
				'fr-fr': "Soignez 20 dégâts à chacun de vos Pokémon.",
				'es-es': "Cura 20 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Cura ciascuno dei tuoi Pokémon da 20 danni.",
				'pt-br': "Cure 20 de danos de cada um dos seus Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei jedem deiner Pokémon."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The rhythm of bright, festive music activates Ludicolo's cells, making it more powerful.",
	},

	thirdParty: {
		cardmarket: 273543,
		tcgplayer: 95896
	}
}

export default card
