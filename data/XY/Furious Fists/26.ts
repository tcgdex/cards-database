import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Aurorus",
		fr: "Dragmara",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		699,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Amaura",
		fr: "Amagara",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ice Shield",
				fr: "Bouclier de Glace",
			},
			effect: {
				en: "Any damage done by an opponent's attack to each of your Water Pokémon that has any Water Energy attached to it is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés par une attaque de votre adversaire à chacun de vos Pokémon Water auquel de l'Énergie Water est attachée sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
