import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Drapion",
		fr: "Drascore"
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		452,
	],
	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Skorupi",
		fr: "Rapion",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Scorpion Grapple",
				fr: "Lutte scorpion",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross Poison",
				fr: "Poison-croix",
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads. If 2 or more of them are heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Si vous obtenez au moins 2 faces, le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: "20×",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Derail",
				fr: "Dérailler",
			},
			effect: {
				en: "Discard all Special Energy cards attached to the Defending Pokémon.",
				fr: "Défaussez toutes les cartes Énergie Spéciale attachées au Pokémon Défenseur.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
