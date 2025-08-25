import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [687],
	set: Set,

	name: {
		en: "Malamar",
		fr: "Sepiatroce",
		es: "Malamar",
		it: "Malamar",
		pt: "Malamar",
		de: "Calamanero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Colluding Tentacles",
			fr: "Tentacules Comploteurs",
			es: "Tentáculos Confabuladores",
			it: "Congiura Tentacolare",
			pt: "Tentáculos Conspiratórios",
			de: "Verschwörerische Tentakel"
		},

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. If you do, this attack does 120 damage to the new Active Pokémon. If you didn't play Xerosic's Machinations from your hand during this turn, this attack does nothing.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Dans ce cas, cette attaque inflige 120 dégâts au nouveau Pokémon Actif. Si vous n'avez pas joué Machinations de Xanthin de votre main pendant ce tour, cette attaque ne fait rien.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Si lo haces, este ataque hace 120 puntos de daño al nuevo Pokémon Activo. Si no has jugado Maquinaciones de Xero de tu mano durante este turno, este ataque no hace nada.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Se lo fai, questo attacco infligge 120 danni al nuovo Pokémon attivo. Se non hai giocato Macchinazioni di Xante dalla tua mano durante questo turno, questo attacco non ha effetto.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Se fizer isto, este ataque causará 120 pontos de dano ao novo Pokémon Ativo. Se você não jogou Tramoias do Xerosic da sua mão durante este turno, este ataque não fará nada.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Wenn du das machst, fügt diese Attacke dem neuen Aktiven Pokémon 120 Schadenspunkte zu. Wenn du Xeros' Machinationen während dieses Zuges nicht aus deiner Hand gespielt hast, hat diese Attacke keine Auswirkungen."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			de: "Rundumangriff"
		},

		damage: 90
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "akagi",

	thirdParty: {
		cardmarket: 780929
	}
}

export default card
