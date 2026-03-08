import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
		de: "Ampharos"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Connect",
				fr: "Connexion d'énergie",
				de: "Energy Connect"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a basic Energy card attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Ampharos is affected by a Special Condition.",
				fr: "Aussi souvent que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie de base attachée à 1 des Pokémon de votre Banc et la placer sur votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Pharamp est affecté par un État Spécial.",
				de: "As often as you like during your turn (before your attack), you may move a basic Energy card attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Ampharos is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Miraculous Thunder",
				fr: "Éclair miraculeux",
				de: "Miraculous Thunder"
			},
			effect: {
				en: "You may discard all Lightning Energy attached to Ampharos. If you do, the Defending Pokémon is now Burned and Confused.",
				fr: "Vous pouvez défausser toutes les Énergies  attachées à Pharamp. Le Pokémon Défenseur est alors Brûlé et Confus.",
				de: "You may discard all  Energy cards attached to Ampharos. If you do, the Defending Pokémon is now Burned and Confused."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276647,
		tcgplayer: 83540
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
