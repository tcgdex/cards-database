import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor"
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		71,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weepinbell",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fragrance Trap",
				fr: "Piège parfumé"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it. This power can't be used if Victreebel is affected by a Special Condition.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, choisissez un des Pokémon du Banc de votre adversaire et échangez-le contre le Pokémon Défenseur. Ce pouvoir ne peut pas être utilisé si Empliflor est affecté par un État spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Corrosive Acid",
				fr: "Acide corrosif"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
