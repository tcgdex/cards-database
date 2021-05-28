import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Arceus ◇",
		fr: "Arceus ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		493,
	],
	hp: 160,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "First Law",
				fr: "Loi Originelle",
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon.",
				fr: "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Trinity Star",
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},
			effect: {
				en: "You can use this attack only if you have Grass, Water, and Lightning Pokémon on your Bench. Search your deck for up to 3 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Étoile Triptyque",
			},
			effect: {
				fr: "Vous ne pouvez utiliser cette attaque que si vous avez des Pokémon Grass, Water et Lightning sur votre Banc. Cherchez jusqu’à 3 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
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

	retreat: 1,



}

export default card
