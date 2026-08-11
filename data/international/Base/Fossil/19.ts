import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Dragonite",
		'fr-fr': "Dracolosse",
		'de-de': "Dragoran"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Step In",
				'fr-fr': "Intervention",
				'de-de': "Einfliegen"
			},
			effect: {
				'en-us': "Once during your turn (before you attack) if Dragonite is on your Bench, you may switch it with your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si Dracolosse est sur votre Banc, vous pouvez l'échanger avec votre Pokémon Actif.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Dragoran auf deiner Bank sitzt, es mit deinem aktiven Pokémon austauschen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slam",
				'fr-fr': "Souplesse",
				'de-de': "Slam"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf zwei Münzen. Dieser Angriff fügt jedesmal, wenn die Münze Kopf zeigt, 40 Schadenspunkte zu."
			},
			damage: "40x",

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.",
		'fr-fr': "Un Pokémon marin extrêmement rare. On dit qu'il est aussi intelligent que l'homme."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273865,
				tcgplayer: 44427
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273865,
				tcgplayer: 44427
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
