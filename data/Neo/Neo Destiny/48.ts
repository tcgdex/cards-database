import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Jolteon",
		fr: "Voltali lumineux",
		de: "Helles Blitza"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eevee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Pulse Guard",
				fr: "Pulsation protectrice",
				de: "Pulse Guard"
			},
			effect: {
				en: "During your opponent's next turn, whenever 30 or more damage is done to Light Jolteon (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
				fr: "Pendant le prochain tour de votre adversaire, si Voltali lumineux se voit infliger 30 dégâts ou plus (après application de la Faiblesse et de la Résistance), prévenez ces dégâts. (Tous les autres effets dus à des attaques subsistent.)",
				de: "During your opponent's next turn, whenever 30 or more damage is done to Light Jolteon (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Needle",
				fr: "Pic-éclair",
				de: "Thunder Needle"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Si vous obtenez au moins 2 faces, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Paralyzed."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Il peut stocker l'énergie électrique ambiante dans ses cellules et l'expulser sous forme d'explosions massives."
	},

	thirdParty: {
		cardmarket: 274700
	}
}

export default card
