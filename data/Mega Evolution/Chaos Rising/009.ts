import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886401,
				tcgplayer: 693526
			}
		},
	],

	name: {
		en: "Ninetales",
		fr: "Feunard",
		es: "Ninetales",
		'es-mx': "Ninetales",
		de: "Vulnona",
		it: "Ninetales",
		pt: "Ninetales"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [38],
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Vulpix"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Nine-Tailed Transfer",
			fr: "Transfert des Neuf Queues",
			es: "Traspaso Nueve Colas",
			'es-mx': "Transferencia de Nueve Colas",
			de: "Neunschweifiger Transfer",
			it: "Trasferimento a Nove Code",
			pt: "Transferência de Nove Caudas"
		},

		cost: ["Fire"],

		effect: {
			en: "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon.",
			fr: "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers le Pokémon Actif de votre adversaire.",
			es: "Mueve todos los contadores de daño de uno de tus Pokémon en Banca al Pokémon Activo de tu rival.",
			'es-mx': "Mueve todos los contadores de daño de 1 de tus Pokémon en Banca al Pokémon Activo de tu rival.",
			de: "Verschiebe alle Schadensmarken von 1 Pokémon auf deiner Bank auf das Aktive Pokémon deines Gegners.",
			it: "Sposta tutti i segnalini danno da uno dei Pokémon nella tua panchina al Pokémon attivo del tuo avversario.",
			pt: "Mova todos os contadores de dano de 1 dos seus Pokémon no Banco para o Pokémon Ativo do seu oponente."
		}
	}, {
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
			es: "Fuego Fatuo",
			'es-mx': "Fuego Fatuo",
			de: "Irrlicht",
			it: "Fuocofatuo",
			pt: "Fogo Fátuo"
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
}

export default card