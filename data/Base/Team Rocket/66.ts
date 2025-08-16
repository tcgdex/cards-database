import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Rattata",
		fr: "Rattata",
		de: "Rattfratz"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Trickery",
				fr: "Ruse",
				de: "Trickery"
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch 1 of your Prizes with the top card of your deck. This power can't be used if Rattata is Asleep, Confused, or Paralyzed.",
				fr: "Une fois pendant votre tour, (avant votre attaque), vous pouvez échanger 1 de vos récompenses avec la carte du sommet de votre deck. Ce pouvoir ne pant ête utilisé si Rattata est Endosmi, Confus ou Paralysé.",
				de: "Once during your turn (before your attack), you may switch 1 of your Prizes with the top card of your deck. This power can't be used if Rattata is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Quick Attack"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires ; si c'est pile, certe attaque inflige 1o dégâts.",
				de: "Flip a coin. If heads, this attack doese plus 10 more damage; if tails, this attack does 10 damage"
			},
			damage: "10+",

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
		fr: "Ses plats favoris sont les noix, les châtaignes, le fromage et le lait."
	},

	thirdParty: {
		cardmarket: 274119,
		tcgplayer: 88611
	}
}

export default card
