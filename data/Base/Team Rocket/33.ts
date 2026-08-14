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
		fr: "Minidraco",
		de: "Dratini"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Evolutionary Light",
				fr: "Lumière évolutive",
				de: "Evolutionslicht"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for an Evolution card. Show it to your opponent and put it into your hand. Shuffle your deck afterward. This power can't be used if Dark Dragonair is Asleep, Confused, or Paralyzed.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Évolution dans votre deck. Placez-la dans votre main, puis mélangez votre deck. Ce pouvoir ne peut être utilisé si Draco obscur est Endormi, Confus ou Paralysé.",
				de: "Einmal während deines Zuges (vor deinem Angriff) darfst du dein Deck nach einer Evolutionskarte durchsuchen. Zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. Diese Fähigkeit kann nicht gespielt werden, falls Dunkles Dragonir schläft, verwirrt oder gelähmt ist."
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
				de: "Schwanzstreich"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 20 dégâts.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei „Zahl“ fügt dieser Angriff 20 Schadenspunkte zu."
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
		en: "As is fitting for a legendary Pokémon, it has many strange powers, including the ability to make rain or snow fall.",
		fr: "Comme il se doit à un Pokémon légendaire, il a de nombreux pouvoirs étranges, comme la faculté de faire pleuvoir ou neiger.",
		de: "Wie es sich für ein legendäres Pokémon gehört, hat es viele seltsame Fähigkeiten, darunter auch, es regnen oder schneien zu lassen."
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
