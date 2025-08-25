import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [701],
	set: Set,

	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
		es: "Hawlucha",
		it: "Hawlucha",
		pt: "Hawlucha",
		de: "Resladero"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Prize Count",
			fr: "Compteur de Récompense",
			es: "Cuenta de Premios",
			it: "Contapremi",
			pt: "Contagem de Prêmios",
			de: "Preiszähler"
		},

		effect: {
			en: "If you have more Prize cards remaining than your opponent, this attack does 90 more damage.",
			fr: "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si te quedan más cartas de Premio que a tu rival, este ataque hace 90 puntos de daño más.",
			it: "Se hai più carte Premio rimanenti del tuo avversario, questo attacco infligge 90 danni in più.",
			pt: "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Shigenori Negishi",

	thirdParty: {
		cardmarket: 769281
	}
}

export default card