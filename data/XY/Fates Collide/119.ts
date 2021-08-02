import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Umbreon EX",
		fr: "Noctali-EX",
	},
	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 170,
	types: [
		"Darkness",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Veil of Darkness",
				fr: "Voile des Ténèbres",
			},
			effect: {
				en: "Discard as many cards as you like from your hand. Then, draw that many cards.",
				fr: "Défaussez autant de cartes que vous voulez de votre main. Ensuite, piochez autant de cartes.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Endgame",
				fr: "Phase Finale",
			},
			effect: {
				en: "If your opponent’s Mega Evolution Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards.",
				fr: "Si le Pokémon Méga-Évolution de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez 2 cartes Récompense supplémentaires.",
			},
			damage: 70,

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
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
