import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Yanma",
		fr: "Yanma",
		de: "Yanma"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		193,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Shockwave",
				fr: "Onde de choc",
				de: "Shockwave"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. Don't apply Weakness and Resistance. Then, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. N'appliquez pas la Faiblesse et la Résistance. Puis, si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange contre le Pokémon Défenseur.",
				de: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. Don't apply Weakness and Resistance. Then, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Swift",
				fr: "Météores",
				de: "Swift"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Pouvoirs Pokémon ou tout autre effet en action sur le Pokémon Défenseur.",
				de: "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "S'il agite ses ailes très vite, il peut provoquer des ondes de choc qui font exploser toutes les vitres du voisinage."
	}
}

export default card
