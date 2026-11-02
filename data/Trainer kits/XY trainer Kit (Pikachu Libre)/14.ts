import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu Libre",
		fr: "Pikachu Catcheur",
		es: "Pikachu Enmascarada",
		it: "Pikachu wrestler",
		pt: "Pikachu Mascarada",
		de: "Wrestler-Pikachu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	illustrator: "Yoshinobu Saito",

	description: {
		en: "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs.",
		de: "Es hat kleine Backentaschen, die mit Elektrizität gefüllt sind. Bei Gefahr entlädt es sie."
	},

	attacks: [{
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
			de: "Ruckzuckhieb"
		},

		damage: "10+",

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			de: "Bei „Kopf“ fügt dieser Angriff 30 weitere Schadenspunkte zu."
		}
	}, {
		name: {
			en: "Flying Elekick",
			fr: "Coup Élec' Volant",
			de: "Fliegender Elekick"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 118819
	}
}

export default card