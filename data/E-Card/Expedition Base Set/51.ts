import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Mackogneur",
		de: "Machomei"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [58],

	hp: 60,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Terraforming",
				fr: "Terraformage",
				de: "Terraforming"
			},
			effect: {
				en: "Once during your turn (before you attack), you may look at the top 4 cards of your deck and rearrange them as you like. This power can't be used if Machamp is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 4 cartes du dessus de votre deck et les remettre dans l'ordre que vous désirez. Ce pouvoir ne peut pas être utilisé si Mackogneur est affecté par un État spécial.",
				de: "Once during your turn (before you attack), you may look at the top 4 cards of your deck and rearrange them as you like. This power can`t be used if Machamp is affected by a Special Condition."
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
				en: "Ember",
				fr: "Poing de fer",
				de: "Iron Fist"
			},
			effect: {
				en: "Discard a Fire Energy card attached to Growlithe.",
				fr: "Comptez le nombre de vos Pokémon en jeu ayant des marqueurs de dégâts. Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chacun de ces Pokémon.",
				de: "Count the number of Pokémon you have in play with damage counters on them. Flip a coin. If heads, this attack does 50 damage plus 10 more damage for each of those Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86962,
				cardmarket: 274891
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
