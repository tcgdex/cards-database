import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Stonjourner",
		fr: "Dolman",
		es: "Stonjourner",
		it: "Stonjourner",
		pt: "Stonjourner",
		de: "Humanolith"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Land’s Pulse",
			fr: "Vibration Terrestre",
			es: "Pulso Telúrico",
			it: "Pulsazione Tellurica",
			pt: "Pulso da Terra",
			de: "Bodenpuls"
		},

		effect: {
			en: "If a Stadium is in play, this attack does 30 more damage.",
			fr: "Si un Stade est en jeu, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Si hay un Estadio en juego, este ataque hace 30 puntos de daño más.",
			it: "Se c’è in gioco una carta Stadio, questo attacco infligge 30 danni in più.",
			pt: "Se um Estádio estiver em jogo, este ataque causará 30 pontos de dano a mais.",
			de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			en: "Giga Hammer",
			fr: "Giga Marteau",
			es: "Gigamartillo",
			it: "Gigamartello",
			pt: "Gigamartelo",
			de: "Gigahammer"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t use Giga Hammer.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Giga Marteau.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Gigamartillo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Gigamartello.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Gigamartelo.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Gigahammer nicht einsetzen."
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card