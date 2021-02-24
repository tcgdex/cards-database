import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Métalosse",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 140,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Metang",
		fr: "Métang",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Plasma Search",
				fr: "Recherche Plasma",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Team Plasma card, reveal it, and put it into your hand. Shuffle your deck afterward. You may not use an Ability with the same name during your turn.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte de la Team Plasma dans votre deck, la montrer et l'ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez pas utiliser une capacité spéciale du même nom pendant votre tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Bend",
				fr: "Contrôleur d'Esprit",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
