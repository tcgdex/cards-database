import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		en: "Latias",
		fr: "Latias",
		es: "Latias",
		it: "Latias",
		pt: "Latias",
		de: "Latias"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,

	description: {
		en: "It can telepathically communicate with people. It changes its appearance using its down that refracts light.",
		de: "Mittels Telepathie kann es mit Menschen kommunizieren. Mit seinen Daunen, die das Licht brechen, kann es sein Aussehen verändern."
	},

	attacks: [{
		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
			de: "Psychosphäre"
		},

		damage: 20
	}, {
		name: {
			en: "Psychic Prism",
			fr: "Prisme Psy",
			de: "Psychoprisma"
		},

		damage: "60+",

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98335
	}
}

export default card