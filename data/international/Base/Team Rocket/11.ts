import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Magneton",
		'fr-fr': "Magneton obscur",
		'de-de': "Dunkles Magneton"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			name: {
				'en-us': "Sonicboom",
				'fr-fr': "Sonicboom",
				'de-de': "Giftpuder"
			},
			effect: {
				'en-us': "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				'fr-fr': "N'appliquez pas la Faiblesse et la Résistance à cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et de la Résistance subsistent.)",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Magnetic Lines",
				'fr-fr': "Lignes magnétiques",
				'de-de': "Magnetische Linien"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any basic Energy cards attached to it, choose 1 of them. If your opponent has any Benched Pokémon, choose 1 of them and attach that Energy card to it.",
				'fr-fr': "Si le Pokémon Défenseur a des cartes Énergies de base attachées à lui, choisissez l'une d'elles. Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et attachez cette carte Énergie sur lui.",
				'de-de': "Falls auf dem verteidigenden Pokémon irgendwelche Basis-Energiekarten abgelegt sind, wähle eine von ihnen. Falls dein Gegner irgendwelche Pokémon auf seiner Bank hat, wähle eines von ihnen und lege die Energiekarte darauf ab."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "The number of incidents of hackers using Magnetons to damage computer systems is steadily increasing.",
		'fr-fr': "Le nombre de pirates informatiques utilisant des Magneton pour endommager les systèmes augmente régulièrement."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274064,
				tcgplayer: 84624
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274064,
				tcgplayer: 84624
			}
		}
	]
}

export default card
