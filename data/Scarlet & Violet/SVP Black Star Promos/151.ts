import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Gouging Fire",
		fr: "Feu-Perçant",
		es: "Flamariete",
		it: "Vampeaguzze",
		pt: "Fogo Corrosão",
		de: "Keilflamme"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Lunge Out",
			fr: "Allonger",
			es: "Arremeter",
			it: "Affondo Lungo",
			pt: "Bote",
			de: "Sprungangriff"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Blazing Charge",
			fr: "Charge Enflammée",
			es: "Carga Calcinadora",
			it: "Carica Ardente",
			pt: "Avanço Flamejante",
			de: "Lodernder Ansturm"
		},

		effect: {
			en: "If your opponent has 4 or fewer Prize cards remaining, this attack does 70 more damage.",
			fr: "S'il reste 4 cartes Récompense ou moins à votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si a tu rival le quedan 4 cartas de Premio o menos, este ataque hace 70 puntos de daño más.",
			it: "Se il tuo avversario ha quattro o meno carte Premio rimanenti, questo attacco infligge 70 danni in più.",
			pt: "Se o seu oponente tiver 4 ou menos cartas de Prêmio restantes, este ataque causará 70 pontos de dano a mais.",
			de: "Wenn dein Gegner 4 oder weniger verbleibende Preiskarten hat, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card