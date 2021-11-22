import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Giratina EX",
		fr: "Giratina-EX",
	},

	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		487,
	],

	hp: 170,

	types: [
		"Dragon",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Renegade Pulse",
				fr: "Onde Renégate",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Mega Evolution Pokémon.",
				fr: "Évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon Méga-Évolution de votre adversaire.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chaos Wheel",
				fr: "Roue Chaotique",
			},
			effect: {
				en: "Your opponent can't play any Pokémon Tool, Special Energy, or Stadium cards from his or her hand during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Outil Pokémon, Énergie spéciale ou Stade de sa main pendant son prochain tour.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic"
}

export default card
