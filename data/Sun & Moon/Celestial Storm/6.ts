import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Ariados",
		fr: "Migalos",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		168,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Reactive Poison",
				fr: "Poison Réactif",
			},
			effect: {
				en: "This attack does 50 more damage for each Special Condition affecting your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spider Trap",
				fr: "Piège d’Araignée",
			},
			effect: {
				en: "You may switch 1 of your opponent's Benched Pokémon with their Active Pokémon. Your opponent's Active Pokémon is now Asleep and Poisoned.",
				fr: "Vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
			},

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
