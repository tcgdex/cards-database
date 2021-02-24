import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Orbeetle",
		fr: "Astronelle",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Dottler",
		fr: "Coléodôme",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bug’s Radar",
				fr: "Radar d’Insecte",
			},
			effect: {
				en: "Once during your turn, you may look at the top 3 cards of your opponent’s deck and put them back in any order.",
				fr: "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus du deck de votre adversaire, puis les replacer dans l’ordre désiré.",
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
				en: "Brainwave",
				fr: "Onde Cérébrale",
			},
			effect: {
				en: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
			},
			damage: "90+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
