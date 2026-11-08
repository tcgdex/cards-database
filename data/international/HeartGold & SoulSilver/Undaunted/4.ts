import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Gliscor",
		'fr-fr': "Scorvol",
		'de-de': "Skorgro"
	},

	illustrator: "Naoki Saito",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [472],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Ninja Fang",
				'fr-fr': "Croc Ninja",
				'de-de': "Ninjafänge"
			},
			effect: {
				'en-us': "If, before Gliscor does damage, the Defending Pokémon has no damage counters on it and is then damaged by this attack (after applying Weakness and Resistance), the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Si, avant que Scorvol n’inflige de dégâts, le Pokémon Défenseur n’a aucun marqueur de dégât et qu’il subit ensuite des dégâts à cause de cette attaque (après application de la Faiblesse et de la Résistance), il est maintenant Paralysé.",
				'de-de': "Falls auf dem Verteidigendem Pokémon vor durch Skorgro zugefügtem Schaden keine Schadensmarken liegen, und ihm durch diesen Angriff Schaden zugefügt wird (nachdem Schwäche und Resistenz verrechnet wurden), ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Jab",
				'fr-fr': "Direct Toxik",
				'de-de': "Gifthieb"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its flight is soundless. It uses its lengthy tail to carry off its prey… Then its elongated fangs do the rest."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279257,
				tcgplayer: 85774
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279257,
				tcgplayer: 85774
			}
		},
		{
			type: "holo",
			foil: "cracked-ice",
			thirdParty: {
				tcgplayer: 125042
			}
		}
	],

}

export default card
