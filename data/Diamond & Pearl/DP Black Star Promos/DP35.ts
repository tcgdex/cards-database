import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
		de: "Porygon-Z"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		474,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon2",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Install",
				fr: "Installation",
				de: "Installieren"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), move a Technical Machine card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Porygon-Z is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une carte Machine Technique attachée à 1 de vos Pokémon sur un autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Porygon-Z est affecté par un État Spécial.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Technische Maschine, die an 1 deiner Pokémon angelegt ist, an ein anderes deiner Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Porygon-Z von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Learning",
				fr: "Apprentissage",
				de: "Lernen"
			},
			effect: {
				en: "Search your deck for a Pokémon LV.X that levels up from 1 of your Pokémon and put it onto that Pokémon. (This counts as leveling up that Pokémon). Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon NIV.X qui change de niveau à partir d'1 de vos Pokémon et placez-le sur ce Pokémon. (Vous le faites ainsi passer au niveau supérieur.) Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer Pokémon LV.X-Karte, die auf 1 deiner Pokémon gelegt werden kann, und lege sie auf dieses Pokémon. (Dies zählt als Level-Up dieses Pokémon.) Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Overload",
				fr: "Surcharge",
				de: "Überlastung"
			},
			effect: {
				en: "Does 40 damage plus 20 more damage for each Technical Machine card attached to Porygon-Z.",
				fr: "Inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque carte Machine Technique attachée à Porygon-Z.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Porygon-Z angelegte Technische Machine zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	variants: [
		{
			type: "holo",
		}
	],

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
