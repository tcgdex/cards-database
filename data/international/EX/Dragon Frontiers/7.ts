import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Nidoqueen δ",
		'fr-fr': "Nidoqueen δ",
		'de-de': "Nidoqueen"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Invitation",
				'fr-fr': "Invitation",
				'de-de': "Einladung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Basic Pokémon or Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Nidoqueen is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre deck un Pokémon de base ou une carte Évolution. Montrez-le (ou la) à votre adversaire et placez-le (ou la) dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Nidoqueen est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 Basis-Pokémon- oder Evolutionskarte durchsuchen. Zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Nidoqueen von einem Speziellen Zustand betroffen ist."
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
				'en-us': "Vengeance",
				'fr-fr': "Vengeance",
				'de-de': "Rache"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more damage for each Basic Pokémon and each Evolution card in your discard pile. You can't add more than 60 damage in this way.",
				'fr-fr': "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon de base et chaque carte Évolution dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 60 dégâts de cette façon.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Basis-Pokémon und jede Evolutionskarte in deinem Ablagestapel zu. Es lassen sich so nicht mehr als 60 Schadenspunkte hinzufügen."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277212
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
