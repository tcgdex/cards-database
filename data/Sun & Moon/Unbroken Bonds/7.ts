import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		44,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Irresistible Aroma",
				fr: "Arôme Irrésistible",
			},
			effect: {
				en: "Once during your turn (before your attack), if your opponent's Bench isn't full, you may flip a coin. If heads, your opponent reveals their hand. Put a Basic Pokémon you find there onto their Bench.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si le Banc de votre adversaire n’est pas plein, vous pouvez lancer une pièce. Si c’est face, votre adversaire dévoile sa main. Placez sur son Banc un Pokémon de base que vous y trouvez.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Drool",
				fr: "Gluant",
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

	retreat: 2,



}

export default card
