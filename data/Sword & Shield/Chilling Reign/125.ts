import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Tornadus VMAX",
		fr: "Boréas VMAX",
		es: "Tornadus VMAX",
		it: "Tornadus VMAX",
		pt: "Tornadus VMAX",
		de: "Boreos VMAX"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	evolveFrom: {
		en: "Tornadus V",
		fr: "Boréas-V"
	},

	attacks: [{
		name: {
			en: "Blasting Wind",
			fr: "Vent Impitoyable",
			es: "Vientos Explosivos",
			it: "Vento Distruttivo",
			pt: "Vendaval Avassalador",
			de: "Peitschender Wind"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Max Wind Spirit",
			fr: "Éolomax",
			es: "Maxiespíritu del Viento",
			it: "Dynafolata Evanescente",
			pt: "Espírito do Vento Max",
			de: "Dyna-Windgeist"
		},

		effect: {
			en: "If a Stadium is in play, this attack does 120 more damage. Then, discard that Stadium.",
			fr: "Si un Stade est en jeu, cette attaque inflige 120 dégâts supplémentaires. Ensuite, défaussez ce Stade.",
			es: "Si hay un Estadio en juego, este ataque hace 120 puntos de daño más. Después, descarta ese Estadio.",
			it: "Se c’è in gioco una carta Stadio, questo attacco infligge 120 danni in più. Poi scarta quella carta Stadio.",
			pt: "Se um Estádio estiver em jogo, este ataque causará 120 pontos de dano a mais. Em seguida, descarte aquele Estádio.",
			de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 120 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
		},

		damage: "120+",
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