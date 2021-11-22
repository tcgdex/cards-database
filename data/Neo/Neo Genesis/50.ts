import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Sunflora",
		fr: "Heliatronc"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		192,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Sunkern",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Petal Dance",
				fr: "Danse-fleur"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads. Sunflora is now Confused (after doing damage).",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces. Heliatronc est maintenant Confus (après application des dégâts)."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il convertit la lumière solaire en énergie. Dans l'obscurité après le coucher du soleil, il ferme ses pétales et demeure immobile."
	}
}

export default card
