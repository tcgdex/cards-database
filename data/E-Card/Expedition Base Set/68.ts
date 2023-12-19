import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Venusaur",
		fr: "Florizarre",
		de: "Bisaflor"
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ivysaur",
	},
	stage: "Stage2",

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
				de: "Einmal während deines Zuges (vor deinem Angriff)kannst du, falls du als Bestandteil deines Zuges eine Energiekarte an dein Aktives Pokémon gelegt hast, gleichzeitig eine zusätzliche Energiekarte an dieses Pokémon anlegen. Diese Fähigkeit kann nicht verwendet werden, falls Bisaflor von einem Speziellen Zustand betroffen ist."
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
				en: "Body Slam",
				fr: "Plaquage",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
