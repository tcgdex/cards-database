import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [127],
	set: Set,

	name: {
		fr: "Scarabrute",
		en: "Pinsir",
		es: "Pinsir",
		it: "Pinsir",
		pt: "Pinsir",
		de: "Pinsir"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Force Poigne",
			en: "Vise Grip",
			es: "Agarre",
			it: "Presa",
			pt: "Agarramento Compressor",
			de: "Klammer"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			fr: "Lancer Téméraire",
			en: "Reckless Throw",
			es: "Lanzamiento Audaz",
			it: "Lancio Avventato",
			pt: "Arremesso Imprudente",
			de: "Waghalsiger Wurf"
		},

		effect: {
			fr: "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			en: "If you have more Prize cards remaining than your opponent, this attack does 90 more damage.",
			es: "Si te quedan más cartas de Premio que a tu rival, este ataque hace 90 puntos de daño más.",
			it: "Se hai più carte Premio rimanenti del tuo avversario, questo attacco infligge 90 danni in più.",
			pt: "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card