import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Budew",
		fr: "Budew",
	},
	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		406,
	],
	hp: 40,
	types: [
		"Psychic",
	],
	evolveFrom: {
		fr: "Rozbouton",
	},
	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Enzyme",
				fr: "Enzyme empoisonné",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Budew by your opponent's Poisoned Pokémon.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Rozbouton par les Pokémon Empoisonnés de votre adversaire.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Buddy-buddy",
				fr: "Copain-copain",
			},
			effect: {
				en: "Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez un Pokémon dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
