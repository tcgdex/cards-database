import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Venusaur",
		'fr-fr': "Florizarre",
		'de-de': "Bisaflor"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [3],

	hp: 100,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Harvest Bounty",
				'fr-fr': "Moisson",
				'de-de': "Ernteprämie"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if you attach an Energy card to your Active Pokémon as part of your turn, you may attach an additional Energy card to that Pokémon at the same time. This power can't be used if Venusaur is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si vous attachez une carte Énergie de votre main à votre Pokémon Actif en tant qu'action de votre tour, vous pouvez attacher une carte Énergie supplémentaire à ce Pokémon. Ce pouvoir ne peut pas être utilisé si Florizarre est affecté par un État spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls du als Bestandteil deines Zuges eine Energiekarte aus deiner Hand an dein Aktives Pokémon angelegt hast, gleichzeitig eine zusätzliche Energiekarte an dieses Pokémon anlegen. Diese Fähigkeit kann nicht verwendet werden, falls Bisaflor von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Bodyslam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90314,
				cardmarket: 274905
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90314,
				cardmarket: 274905
			},
		},
	],
}

export default card
