import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Regigigas",
		fr: "Regigigas",
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		486,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Recover Mechanism",
				fr: "Mécanisme de récupération",
			},
			effect: {
				en: "When you attach an Energy card from your hand to Regigigas, remove all Special Conditions from Regigigas.",
				fr: "Lorsque vous attachez une carte Énergie de votre main à Regigigas, retirez-lui tous ses États Spéciaux.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gigaton Punch",
				fr: "Gigaton poing",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 damage plus 20 more damage and does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires et inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		fr: "Une légende tenace veut que ce Pokémon ait traîné les continents en les attachant à des cordes."
	}
}

export default card
