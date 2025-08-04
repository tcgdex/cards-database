import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Falinks",
		fr: "Hexadron",
		es: "Falinks",
		it: "Falinks",
		pt: "Falinks",
		de: "Legios"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		en: "The six of them work together as one Pokémon. Teamwork is also their battle strategy, and they constantly change their formation as they fight."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			es: "Golpe Cabeza",
			pt: "Cabeçada",
			it: "Bottintesta"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Cliff Edge Formation",
			fr: "Escadron Ultime",
			de: "Klippenrandformation",
			es: "Formación Peligrosa",
			pt: "Formação Penhasco",
			it: "Schieramento Dirupo"
		},

		damage: "60+",

		effect: {
			en: "If your opponent has exactly 1 Prize card remaining, this attack does 160 more damage.",
			fr: "S'il reste exactement une carte Récompense à votre adversaire, cette attaque inflige 160 dégâts supplémentaires.",
			de: "Wenn dein Gegner genau 1 verbleibende Preiskarte hat, fügt diese Attacke 160 Schadenspunkte mehr zu.",
			es: "Si a tu rival le queda exactamente 1 carta de Premio, este ataque hace 160 puntos de daño más.",
			pt: "Se o seu oponente tiver exatamente 1 carta de Prêmio restante, este ataque causará 160 pontos de dano a mais.",
			it: "Se il tuo avversario ha esattamente una carta Premio rimanente, questo attacco infligge 160 danni in più."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582782,
		tcgplayer: 253368
	}
}

export default card