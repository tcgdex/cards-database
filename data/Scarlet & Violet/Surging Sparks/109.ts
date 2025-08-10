import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [530],
	set: Set,

	name: {
		en: "Excadrill",
		fr: "Minotaupe",
		es: "Excadrill",
		it: "Excadrill",
		pt: "Excadrill",
		de: "Stalobor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Digging Claw",
			fr: "Griffe Excavatrice",
			es: "Garra Excavadora",
			it: "Scavartiglio",
			pt: "Garras de Escavação",
			de: "Buddelklaue"
		},

		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Drill Smash",
			fr: "Broiement Perceuse",
			es: "Golpe Taladro",
			it: "Avvitacolpo",
			pt: "Pancada Perfurante",
			de: "Schmetterbohrer"
		},

		effect: {
			en: "If you have any {M} Pokémon on your Bench, this attack does 80 more damage.",
			fr: "Si vous avez au moins un Pokémon {M} sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si tienes algún Pokémon {M} en tu Banca, este ataque hace 80 puntos de daño más.",
			it: "Se hai dei Pokémon {M} in panchina, questo attacco infligge 80 danni in più.",
			pt: "Se você tiver algum Pokémon {M} no seu Banco, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn du mindestens 1 {M}-Pokémon auf deiner Bank hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Yuya Oka"
}

export default card
