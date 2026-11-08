import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Charizard",
		'fr-fr': "Dracaufeu",
		'es-es': "Charizard",
		'it-it': "Charizard",
		'pt-br': "Charizard",
		'de-de': "Glurak"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Resolute Flame",
				'fr-fr': "Flamme Résolue",
				'es-es': "Llama Firme",
				'it-it': "Fiamma Risoluta",
				'pt-br': "Chama Resoluta",
				'de-de': "Resolute Flamme"
			},
			effect: {
				'en-us': "This Pokémon’s attacks do 30 more damage to your opponent’s Active Pokémon for each of their Pokémon-GX and Pokémon-EX in play.",
				'fr-fr': "Les attaques de ce Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chacun de ses Pokémon-GX et Pokémon-EX en jeu.",
				'es-es': "Los ataques de este Pokémon hacen 30 puntos de daño más al Pokémon Activo de tu rival por cada uno de sus Pokémon-GX y Pokémon-EX en juego.",
				'it-it': "Gli attacchi di questo Pokémon infliggono 30 danni in più al Pokémon attivo del tuo avversario per ogni suo Pokémon-GX e Pokémon-EX in gioco.",
				'pt-br': "Os ataques deste Pokémon causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente para cada um dos Pokémon-GX e Pokémon-EX dele(a) em jogo.",
				'de-de': "Die Attacken dieses Pokémon fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr mal der Anzahl der Pokémon-GX und Pokémon-EX, die er im Spiel hat, zu."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fiery Blast",
				'fr-fr': "Explosion Ardente",
				'es-es': "Explosión Ardiente",
				'it-it': "Bomba Incendiaria",
				'pt-br': "Explosão Ardente",
				'de-de': "Feuerstoß"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

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
		'en-us': "Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures.",
	},

	thirdParty: {
		cardmarket: 361549,
		tcgplayer: 175270
	}
}

export default card
