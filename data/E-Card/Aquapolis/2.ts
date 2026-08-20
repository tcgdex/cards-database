import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
		de: "Arkani"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [59],

	hp: 90,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
		de: "Fukano"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Extreme Speed",
				fr: "Vitesse extrême",
				de: "Turbotempo"
			},
			effect: {
				en: "You pay Colorless less to retreat Arcanine for each Energy attached to it.",
				fr: "Vous payez  de moins pour faire battre Arcanin en retraite pour chaque Énergie qui lui est attachée.",
				de: "Für jede an Arkani angelegte Energie zahlst du {C} weniger, wenn du es zurückziehst."
			}
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
				en: "Fire Blow",
				fr: "Coud'flammes",
				de: "Feuerspucken"
			},
			effect: {
				en: "You may discard any number of Fire Energy cards attached to Arcanine when you use this attack. If you do, flip a number of coins equal to the number of Fire Energy cards you discarded. This attack does 30 damage plus 30 more damage for each heads.",
				fr: "Vous pouvez vous défausser d'autant de cartes Énergie  attachées à Arcanin que vous le désirez. Si vous le faites, lancez un nombre de pièces égal au nombre de cartes Énergie  dont vous vous êtes défaussé. Cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires pour chaque face.",
				de: "Du kannst eine beliebige Anzahl an Arkani angelegter {R}-Energiekarten auf deinen Ablagestapel legen, wenn du diesen Angriff verwendest. Falls du dies tust, wirf eine Anzahl Münzen gleich der Anzahl so abgelegter {R}-Energiekarten. Dieser Angriff fügt 30 Schadenspunkte plus 30 weitere Schadenspunkte pro geworfenem „Kopf“ zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 83575,
				cardmarket: 275041
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 83575,
				cardmarket: 275041
			}
		},
	]
}

export default card
