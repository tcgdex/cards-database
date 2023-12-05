import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Leafeon",
		fr: "Phyllali",
		de: "Folipurba"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
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
				en: "Energy Forcing",
				fr: "Énergie forcing",
				de: "Energiezwang"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach an Energy card from your hand to 1 of your Pokémon. This power can't be used if Leafeon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie de votre main à 1 de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Phyllali est affecté par un État Spécial.",
				de: "Einmal während deines Zuges(vor deinem Angriff) kannst du 1 Energiekarte von deiner Hand an 1 Pokémon anlegen. Diese POké-Power kann nciht benutzt werden, wenn Folipurba von einem Speziellen Zustand betroffen ist."
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
				en: "Verdant Dance",
				fr: "Danse verdoyante",
				de: "Begrünungstanz"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Energy attached to all of your Pokémon.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à tous vos Pokémon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede Energie, die an deine Pokémon angelegt ist, zu."
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



}

export default card
