import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur"
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Machoke",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Terraforming",
				fr: "Terraformage"
			},
			effect: {
				en: "Once during your turn (before you attack), you may look at the top 4 cards of your deck and rearrange them as you like. This power can't be used if Machamp is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 4 cartes du dessus de votre deck et les remettre dans l'ordre que vous désirez. Ce pouvoir ne peut pas être utilisé si Mackogneur est affecté par un État spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Fist",
				fr: "Poing de fer"
			},
			effect: {
				en: "Count the number of Pokémon you have in play with damage counters on them. Flip a coin. If heads, this attack does 50 damage plus 10 more damage for each of those Pokémon.",
				fr: "Comptez le nombre de vos Pokémon en jeu ayant des marqueurs de dégâts. Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chacun de ces Pokémon."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
