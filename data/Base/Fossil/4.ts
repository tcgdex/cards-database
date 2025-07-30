import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
		de: "Dragoran"
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
		en: "Dragonair",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Step In",
				fr: "Intervention",
				de: "Einfligen"
			},
			effect: {
				en: "Once during your turn (before you attack) if Dragonite is on your Bench, you may switch it with your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Dracolosse est sur votre Banc, vous pouvez l'échanger avec votre Pokémon Actif.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Dragoran auf deiner Bank sitzt, es mit deinem aktiven Pokémon austauschen."
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
				en: "Slam",
				fr: "Souplesse",
				de: "Slam"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt jedesmal, wenn die Münze Kopf zeigt, 40 Schadenspunkte zu."
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

	description: {
		fr: "Un Pokémon marin extrêmement rare. On dit qu'il est aussi intelligent que l'homme."
	},

	thirdParty: {
		cardmarket: 273865,
		tcgplayer: 106520
	}
}

export default card
