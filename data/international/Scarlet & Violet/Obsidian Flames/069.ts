import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [604],
	set: Set,

	name: {
		'fr-fr': "Ohmassacre",
		'en-us': "Eelektross",
		'es-es': "Eelektross",
		'it-it': "Eelektross",
		'pt-br': "Eelektross",
		'de-de': "Zapplarang"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Lampéroie",
		'en-us': "Eelektrik",
		'es-es': "Eelektrik",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
		'de-de': "Zapplalek"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Choc Aspirant",
			'en-us': "Suction Shock",
			'es-es': "Descarga Succionadora",
			'it-it': "Ventosa Folgorante",
			'pt-br': "Choque de Sucção",
			'de-de': "Ansaugschock"
		},

		effect: {
			'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Dans ce cas, cette attaque inflige 60 dégâts au nouveau Pokémon Actif. Lancez ensuite une pièce. Si c'est face, ce Pokémon-là est maintenant Paralysé.",
			'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. If you do, this attack does 60 damage to the new Active Pokémon, and then flip a coin. If heads, that Pokémon is now Paralyzed.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Si lo haces, este ataque hace 60 puntos de daño al nuevo Pokémon Activo, y luego lanza 1 moneda. Si sale cara, ese Pokémon pasa a estar Paralizado.",
			'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Se lo fai, questo attacco infligge 60 danni al nuovo Pokémon attivo, poi lancia una moneta. Se esce testa, quel Pokémon viene paralizzato.",
			'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Se fizer isto, este ataque causará 60 pontos de dano ao novo Pokémon Ativo e, em seguida, jogue uma moeda. Se sair cara, aquele Pokémon agora estará Paralisado.",
			'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Wenn du das machst, fügt diese Attacke dem neuen Aktiven Pokémon 60 Schadenspunkte zu und du wirfst anschließend 1 Münze. Bei Kopf ist jenes Pokémon jetzt paralysiert."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Éclair Frontal",
			'en-us': "Head Bolt",
			'es-es': "Rayo de Cabeza",
			'it-it': "Zuccalampo",
			'pt-br': "Raio de Cabeça",
			'de-de': "Kopf-Blitz"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725149,
				tcgplayer: 509835,
				cardtrader: 255629
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725149,
				tcgplayer: 509835,
				cardtrader: 255629
			}
		},
	],

	illustrator: "Masakazu Fukuda",

	
}

export default card
