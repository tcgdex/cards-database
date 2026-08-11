import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [687],
	set: Set,

	name: {
		'en-us': "Malamar",
		'fr-fr': "Sepiatroce",
		'es-es': "Malamar",
		'it-it': "Malamar",
		'pt-br': "Malamar",
		'de-de': "Calamanero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
		'es-es': "Inkay",
		'it-it': "Inkay",
		'pt-br': "Inkay",
		'de-de': "Iscalar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Colluding Tentacles",
			'fr-fr': "Tentacules Comploteurs",
			'es-es': "Tentáculos Confabuladores",
			'it-it': "Congiura Tentacolare",
			'pt-br': "Tentáculos Conspiratórios",
			'de-de': "Verschwörerische Tentakel"
		},

		effect: {
			'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. If you do, this attack does 120 damage to the new Active Pokémon. If you didn't play Xerosic's Machinations from your hand during this turn, this attack does nothing.",
			'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Dans ce cas, cette attaque inflige 120 dégâts au nouveau Pokémon Actif. Si vous n'avez pas joué Machinations de Xanthin de votre main pendant ce tour, cette attaque ne fait rien.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Si lo haces, este ataque hace 120 puntos de daño al nuevo Pokémon Activo. Si no has jugado Maquinaciones de Xero de tu mano durante este turno, este ataque no hace nada.",
			'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Se lo fai, questo attacco infligge 120 danni al nuovo Pokémon attivo. Se non hai giocato Macchinazioni di Xante dalla tua mano durante questo turno, questo attacco non ha effetto.",
			'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Se fizer isto, este ataque causará 120 pontos de dano ao novo Pokémon Ativo. Se você não jogou Tramoias do Xerosic da sua mão durante este turno, este ataque não fará nada.",
			'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Wenn du das machst, fügt diese Attacke dem neuen Aktiven Pokémon 120 Schadenspunkte zu. Wenn du Xeros' Machinationen während dieses Zuges nicht aus deiner Hand gespielt hast, hat diese Attacke keine Auswirkungen."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",


	illustrator: "akagi",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780929,
				tcgplayer: 560344
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780929,
				tcgplayer: 560344
			}
		},
	],
}

export default card
