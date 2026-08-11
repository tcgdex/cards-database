import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Dragonair",
		'fr-fr': "Draco obscur",
		'de-de': "Dunkles Dragonir"
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
		'en-us': "Dratini",
		'fr-fr': "Minidraco"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Evolutionary Light",
				'fr-fr': "Lumière évolutive",
				'de-de': "Evolutionary Light"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for an Evolution card. Show it to your opponent and put it into your hand. Shuffle your deck afterward. This power can't be used if Dark Dragonair is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Évolution dans votre deck. Placez-la dans votre main, puis mélangez votre deck. Ce pouvoir ne peut être utilisé si Draco obscur est Endormi, Confus ou Paralysé.",
				'de-de': "Once during your turn (before your attack), you may search your deck for an Evolution card. Shwo it to your opponent and put it into your hand. Shuffle your deck afterward. This power can't be used if Dark Dragonair is Asleep, Confused, or Paralyzed."
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
				'en-us': "Tail Strike",
				'fr-fr': "Attaque codale",
				'de-de': "Tail Strike"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 20 dégâts.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage."
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
	retreat: 2,


	description: {
		'en-us': "As is fitting for a legendary Pokémon, it has many strange powers, including the ability to make rain or snow fall.",
		'fr-fr': "Comme il se doit à un Pokémon légendaire, il a de nombreux pouvoirs étranges, comme la faculté de faire pleuvoir ou neiger."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274086,
				tcgplayer: 84580
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274086,
				tcgplayer: 84580
			}
		}
	]
}

export default card
