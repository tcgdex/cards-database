import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
		de: "Smettbo"
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
		en: "Metapod",
		fr: "Chrysacier",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Parallel Drain",
				fr: "Tuyau parallèle",
				de: "Parallelsauger"
			},
			effect: {
				en: "After your attack, remove from 1 of your Pokémon the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Après votre attaque, retirez à 1 de vos Pokémon autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
				de: "Entferne nach deinem Angriff Schadensmarken von 1 deiner Pokémon entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon zugefügt wurden."
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
				en: "Dozing Scales",
				fr: "Écailles ensommeillées",
				de: "Schlummerschuppen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf 1 Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt vergiftet."
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

	thirdParty: {
		cardmarket: 277916,
		tcgplayer: 84066
	}
}

export default card
