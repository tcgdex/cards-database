import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Dragonair",
		fr: "Draco obscur",
		de: "Dunkles Dragonir"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Dratini",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Evolutionary Light",
				fr: "Lumière évolutive",
				de: "Evolutionary Light"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for an Evolution card. Show it to your opponent and put it into your hand. Shuffle your deck afterward. This power can't be used if Dark Dragonair is Asleep, Confused, or Paralyzed.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Évolution dans votre deck. Placez-la dans votre main, puis mélangez votre deck. Ce pouvoir ne peut être utilisé si Draco obscur est Endormi, Confus ou Paralysé.",
				de: "Once during your turn (before your attack), you may search your deck for an Evolution card. Shwo it to your opponent and put it into your hand. Shuffle your deck afterward. This power can't be used if Dark Dragonair is Asleep, Confused, or Paralyzed."
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
				en: "Tail Strike",
				fr: "Attaque codale",
				de: "Tail Strike"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 20 dégâts.",
				de: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage."
			},
			damage: "20+",

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Comme il se doit à un Pokémon légendaire, il a de nombreux pouvoirs étranges, comme la faculté de faire pleuvoir ou neiger."
	},

	thirdParty: {
		cardmarket: 274086,
		tcgplayer: 84580
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
