import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years.",
	},

	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'es-es': "Ninetales",
		'es-mx': "Ninetales",
		'de-de': "Vulnona",
		'it-it': "Ninetales",
		'pt-br': "Ninetales"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [38],
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Vulpix"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Nine-Tailed Transfer",
			'fr-fr': "Transfert des Neuf Queues",
			'es-es': "Traspaso Nueve Colas",
			'es-mx': "Transferencia de Nueve Colas",
			'de-de': "Neunschweifiger Transfer",
			'it-it': "Trasferimento a Nove Code",
			'pt-br': "Transferência de Nove Caudas"
		},

		cost: ["Fire"],

		effect: {
			'en-us': "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon.",
			'fr-fr': "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers le Pokémon Actif de votre adversaire.",
			'es-es': "Mueve todos los contadores de daño de uno de tus Pokémon en Banca al Pokémon Activo de tu rival.",
			'es-mx': "Mueve todos los contadores de daño de 1 de tus Pokémon en Banca al Pokémon Activo de tu rival.",
			'de-de': "Verschiebe alle Schadensmarken von 1 Pokémon auf deiner Bank auf das Aktive Pokémon deines Gegners.",
			'it-it': "Sposta tutti i segnalini danno da uno dei Pokémon nella tua panchina al Pokémon attivo del tuo avversario.",
			'pt-br': "Mova todos os contadores de dano de 1 dos seus Pokémon no Banco para o Pokémon Ativo do seu oponente."
		}
	}, {
		name: {
			'en-us': "Will-O-Wisp",
			'fr-fr': "Feu Follet",
			'es-es': "Fuego Fatuo",
			'es-mx': "Fuego Fatuo",
			'de-de': "Irrlicht",
			'it-it': "Fuocofatuo",
			'pt-br': "Fogo Fátuo"
		},

		cost: ["Fire", "Fire"],
		damage: 70
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886401,
				tcgplayer: 693526
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886401,
				tcgplayer: 693526
			}
		},
	],
}

export default card
