import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Persian",
		fr: "Persian obscur"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Meowth",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fascinate",
				fr: "Fascination"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon. This attack can't be used if your opponent has no Benched Pokémon.",
				fr: "Lancez une pièce. Si c'est face, choisissez 1 des Pokémon du Banc de votre adversaire et échangez-le avec le Pokémon Défenseur. Cette attaque ne peut être utilisée si votre adversaire n'a pas de Pokémon sur son Banc."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Poison Claws",
				fr: "Griffes empoisonnées"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné."
			},

			damage: 10
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Les femmes l'adorent en raison de sa magnifique fourrure. Le chef des Rocket en possède un comme animal de compagnie."
	}
}

export default card
