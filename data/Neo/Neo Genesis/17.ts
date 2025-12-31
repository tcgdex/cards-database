import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
		de: "Tornupto"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Quilava",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Fire Recharge",
				fr: "Recharge de feu",
				de: "Fire Recharge"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, attach a Fire Energy card from your discard pile to 1 of your Fire Pokémon. This power can't be used if Typhlosion is Asleep, Confused, or Paralyzed.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, attachez une carte Énergie  de votre pile de défausse sur un de vos Pokémon . Ce pouvoir ne peut être utilisé si Typhlosion est Endormi, Confus ou Paralysé.",
				de: "Once during your turn (before your attack), you may flip a coin. If heads, attach a  Energy card from your discard pile to 1 of your  Pokémon. This power can't be used if Typhlosion is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Flame Burst",
				fr: "Éruption de flammes",
				de: "Flame Burst"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 damage plus 20 more damage and does 20 damage to Typhlosion. If tails, this attack does 60 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires et inflige 20 dégâts à Typhlosion. Si c'est pile, cette attaque inflige 60 dégâts.",
				de: "Flip a coin. If heads, this attack does 60 damage plus 20 more damage and does 20 damage to Typhlosion. If tails, this attack does 60 damage."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Dans ses moments de rage, il devient tellement chaud que tout ce qu'il touche prend feu."
	},

	thirdParty: {
		cardmarket: 274417,
		tcgplayer: 90098
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
