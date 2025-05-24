import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Tomberro",
		en: "Houndstone",
		es: "Houndstone",
		it: "Houndstone",
		pt: "Houndstone",
		de: "Friedwuff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Ruade",
			en: "Rear Kick",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Hy-Paire Féroce",
			en: "Two Four-ocious",
			es: "Ferocidad Dos-Cuatro",
			it: "Grrr-an Ferocia",
			pt: "Duas Quatrocidades",
			de: "Vierzweifelnder Biss"
		},

		effect: {
			fr: "S'il reste exactement 2 ou 4 cartes Récompense à votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			en: "If your opponent has exactly 2 or 4 Prize cards remaining, this attack does 120 more damage.",
			es: "Si a tu rival le quedan exactamente 2 o 4 cartas de Premio, este ataque hace 120 puntos de daño más.",
			it: "Se il tuo avversario ha esattamente due o quattro carte Premio rimanenti, questo attacco infligge 120 danni in più.",
			pt: "Se o seu oponente tiver exatamente 2 ou 4 cartas de Prêmio restantes, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn dein Gegner genau 2 oder 4 verbleibende Preiskarten hat, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Saya Tsuruta"
}

export default card