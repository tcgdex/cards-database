import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Florizarre",
		de: "Bisaflor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [195],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Harvest Bounty",
				fr: "Moisson",
				de: "Ernteprämie"
			},
			effect: {
				en: "Once during your turn (before you attack), If you attach an Energy card from your hand to your Active Pokémon as part of your turn, you may attach an additional Energy card to that Pokémon at the same time. This power can't be used if Venusaur is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si vous attachez une carte Énergie de votre main à votre Pokémon Actif en tant qu'action de votre tour, vous pouvez attacher une carte Énergie supplémentaire à ce Pokémon. Ce pouvoir ne peut pas être utilisé si Florizarre est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls du als Bestandteil deines Zuges eine Energiekarte aus deiner Hand an dein Aktives Pokémon angelegt hast, gleichzeitig eine zusätzliche Energiekarte an dieses Pokémon anlegen. Diese Fähigkeit kann nicht verwendet werden, falls Bisaflor von einem Speziellen Zustand betroffen ist."
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
				en: "Water Gun",
				fr: "Plaquage",
				de: "Bodyslam"
			},
			effect: {
				en: "This attack does 20 damage plus 10 more damage for each Water Energy attached to Quagsire but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
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
		}
	],
}

export default card
