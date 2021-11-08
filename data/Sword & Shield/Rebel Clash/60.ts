import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Shinx",
		fr: "Lixy",
		es: "Shinx",
		it: "Shinx",
		pt: "Shinx",
		de: "Sheinux"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Under Pressure",
				fr: "Sous Pression",
				es: "Bajo Presión",
				it: "Sotto Pressione",
				pt: "Sob Pressão",
				de: "Unter Druck"
			},
			effect: {
				en: "If your opponent has 3 or fewer Prize cards remaining, this attack does 50 more damage.",
				fr: "S'il reste 3 cartes Récompense ou moins à votre adversaire, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si a tu rival le quedan 3 o menos cartas de Premio, este ataque hace 50 puntos de daño más.",
				it: "Se il tuo avversario ha tre o meno carte Premio rimanenti, questo attacco infligge 50 danni in più.",
				pt: "Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Lightning"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded."
	}
}

export default card
