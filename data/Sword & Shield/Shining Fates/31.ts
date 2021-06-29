import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lixy",
		en: "Shinx",
		es: "Shinx",
		it: "Shinx",
		pt: "Shinx",
		de: "Sheinux"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Sous Pression",
			en: "Under Pressure",
			es: "Bajo Presión",
			it: "Sotto Pressione",
			pt: "Sob Pressão",
			de: "Unter Druck"
		},

		effect: {
			fr: "S’il reste 3 cartes Récompense ou moins à votre adversaire, cette attaque inflige 50 dégâts supplémentaires.",
			en: "If your opponent has 3 or fewer Prize cards remaining, this attack does 50 more damage.",
			es: "Si a tu rival le quedan 3 o menos cartas de Premio, este ataque hace 50 puntos de daño más.",
			it: "Se il tuo avversario ha tre o meno carte Premio rimanenti, questo attacco infligge 50 danni in più.",
			pt: "Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, este ataque causará 50 pontos de dano a mais.",
			de: "Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card