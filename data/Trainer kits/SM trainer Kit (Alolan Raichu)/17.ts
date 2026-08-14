import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		en: "Alolan Raichu",
		fr: "Raichu d’Alola",
		es: "Raichu de Alola",
		it: "Raichu di Alola",
		pt: "Raichu de Alola",
		de: "Alola-Raichu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	stage: "Stage1",
	retreat: 1,
	illustrator: "5ban Graphics",

	description: {
		en: "It only evolves to this form in the Alola region. According to researchers, its diet is one of the causes of this change.",
		de: "Es entwickelt sich nur in Alola zu dieser Form. Forscher behaupten, dass einer der Gründe dafür das dortige Futter sei."
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
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		}
	}, {
		name: {
			en: "Electric Surfer",
			fr: "Surfeur Électrique",
			de: "Elektrosurfer"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297248,
				tcgplayer: 152872
			}
		},
	],

}

export default card