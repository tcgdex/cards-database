import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Flareon",
		fr: "Pyroli lumineux"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Warm Up",
				fr: "Réchauffement"
			},
			effect: {
				en: "If you have any benched Pokémon, search your deck for a Energy card and attach it to 1 of them. Then shuffle your deck.",
				fr: "Si vous avez des Pokémon sur votre Banc, cherchez une carte Énergie  dans votre deck et attachez-la à l'un d'eux. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burning Flame",
				fr: "Flamme brûlante"
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard a Energy card attached to Light Flareon or this attack does nothing. This attack does 30 damage plus 20 damage for each heads.",
				fr: "Lancez 2 pièces. Pour chaque face, défaussez-vous d'une carte Énergie  attachée à Pyroli lumineux ou cette attaque ne fait rien. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Il crée ses flammes en inspirant l'air dans une poche spéciale de son corps et en le chauffant à plus de 3000 degrés."
	}
}

export default card
