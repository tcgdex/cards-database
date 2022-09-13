import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Dustox",
		fr: "Papinox",
		es: "Dustox",
		it: "Dustox",
		pt: "Dustox",
		de: "Pudox"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
		es: "Cascoon",
		it: "Cascoon",
		pt: "Cascoon",
		de: "Panekon"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Nadir Powder",
			fr: "Poudre Nadir",
			es: "Polvareda Nadir",
			it: "Polvere Distruttiva",
			pt: "Pó das Profundezas",
			de: "Nadirpuder"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned. During Pokémon Checkup, put 8 damage counters on that Pokémon instead of 1.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné. Pendant le Contrôle Pokémon, placez 8 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado. Durante el Chequeo Pokémon, pon 8 contadores de daño en vez de 1 en ese Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato. Metti otto segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado. Durante o Checape Pokémon, coloque 8 contadores de dano ao invés de 1 naquele Pokémon.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet. Lege beim Pokémon-Check 8 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Cutting Wind",
			fr: "Vent Glacial",
			es: "Viento Helado",
			it: "Vento Tagliente",
			pt: "Vento Dilacerante",
			de: "Schneidender Wind"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card
