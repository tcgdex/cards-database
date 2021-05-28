import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Boltund V",
		fr: "Fulgudog V"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electrify",
				fr: "Électrisation"
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 2 cartes Énergie Lightning, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Bolt Storm",
				fr: "Tempête Éclair"
			},
			effect: {
				en: "This attack does 30 more damage for each Lightning Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Lightning attachée à tous vos Pokémon."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 200,
	types: ["Lightning"],
	regulationMark: "D"
}

export default card
