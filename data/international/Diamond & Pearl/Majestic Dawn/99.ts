import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Leafeon",
		'fr-fr': "Phyllali",
		'de-de': "Folipurba"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		470,
	],

	hp: 110,

	types: [
		"Grass",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Energy Forcing",
				'fr-fr': "Énergie forcing",
				'de-de': "Energiezwang"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach an Energy card from your hand to 1 of your Pokémon. This power can't be used if Leafeon is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie de votre main à 1 de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Phyllali est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges(vor deinem Angriff) kannst du 1 Energiekarte von deiner Hand an 1 Pokémon anlegen. Diese POké-Power kann nciht benutzt werden, wenn Folipurba von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Verdant Dance",
				'fr-fr': "Danse verdoyante",
				'de-de': "Begrünungstanz"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more damage for each Energy attached to all of your Pokémon.",
				'fr-fr': "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à tous vos Pokémon.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede Energie, die an deine Pokémon angelegt ist, zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278148,
		tcgplayer: 86684
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
