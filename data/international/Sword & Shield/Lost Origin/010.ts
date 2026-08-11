import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [269],
	set: Set,

	name: {
		'en-us': "Dustox",
		'fr-fr': "Papinox",
		'es-es': "Dustox",
		'it-it': "Dustox",
		'pt-br': "Dustox",
		'de-de': "Pudox"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys",
		'es-es': "Cascoon",
		'it-it': "Cascoon",
		'pt-br': "Cascoon",
		'de-de': "Panekon"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Nadir Powder",
			'fr-fr': "Poudre Nadir",
			'es-es': "Polvareda Nadir",
			'it-it': "Polvere Distruttiva",
			'pt-br': "Pó das Profundezas",
			'de-de': "Nadirpuder"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned. During Pokémon Checkup, put 8 damage counters on that Pokémon instead of 1.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné. Pendant le Contrôle Pokémon, placez 8 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado. Durante el Chequeo Pokémon, pon 8 contadores de daño en vez de 1 en ese Pokémon.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato. Metti otto segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado. Durante o Checape Pokémon, coloque 8 contadores de dano ao invés de 1 naquele Pokémon.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet. Lege beim Pokémon-Check 8 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Cutting Wind",
			'fr-fr': "Vent Glacial",
			'es-es': "Viento Helado",
			'it-it': "Vento Tagliente",
			'pt-br': "Vento Dilacerante",
			'de-de': "Schneidender Wind"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674021,
				tcgplayer: 283874
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674021,
				tcgplayer: 283874
			}
		},
	],
}

export default card
