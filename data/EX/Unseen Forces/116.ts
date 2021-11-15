import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Rocket's Persian ex",
		fr: "Persian ex de Rocket"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Rocket's Meowth",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Night Cry",
				fr: "Cri nocturne"
			},
			effect: {
				en: "Once during your turn, if Rocket's Persian ex is on your Bench, you may search your deck for a Pokémon with Dark or Rocket's in its name. Show it to your opponent and put it into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour, si Persian ex de Rocket est sur votre Banc, vous pouvez chercher dans votre deck un Pokémon dont le nom comporte Obscur ou Rocket. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck."
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
				en: "Toxic Claws",
				fr: "Griffes toxiques"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
