import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Tornadus V",
		fr: "Boréas V",
		es: "Tornadus V",
		it: "Tornadus V",
		pt: "Tornadus V",
		de: "Boreos V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Blow Through",
			fr: "Grosse Bourrasque",
			es: "Gran Torbellino",
			it: "Colposecco",
			pt: "Sopro Intenso",
			de: "Durchdringender Strahl"
		},

		effect: {
			en: "If a Stadium is in play, this attack does 20 more damage.",
			fr: "Si un Stade est en jeu, cette attaque inflige 20 dégâts supplémentaires.",
			es: "Si hay un Estadio en juego, este ataque hace 20 puntos de daño más.",
			it: "Se c’è in gioco una carta Stadio, questo attacco infligge 20 danni in più.",
			pt: "Se um Estádio estiver em jogo, este ataque causará 20 pontos de dano a mais.",
			de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Colorless"]
	}, {
		name: {
			en: "Blasting Hammer",
			fr: "Marteau Impitoyable",
			es: "Martillo Explosivo",
			it: "Martello Distruttivo",
			pt: "Martelada Avassaladora",
			de: "Sprengender Hammer"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un’Energia da questo Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card