import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Butterfree",
		'fr-fr': "Papilusion",
		'de-de': "Smettbo"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		12,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Parallel Drain",
				'fr-fr': "Tuyau parallèle",
				'de-de': "Parallelsauger"
			},
			effect: {
				'en-us': "After your attack, remove from 1 of your Pokémon the number of damage counters equal to the damage you did to the Defending Pokémon.",
				'fr-fr': "Après votre attaque, retirez à 1 de vos Pokémon autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
				'de-de': "Entferne nach deinem Angriff Schadensmarken von 1 deiner Pokémon entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon zugefügt wurden."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Dozing Scales",
				'fr-fr': "Écailles ensommeillées",
				'de-de': "Schlummerschuppen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	description: {
		'en-us': "It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.",
	},

	thirdParty: {
		cardmarket: 277916,
		tcgplayer: 84066
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
