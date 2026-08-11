import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Sandslash",
		'fr-fr': "Sablaireau",
		'de-de': "Sandamer"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spike Armor",
				'fr-fr': "Armure piquante",
				'de-de': "Stachelpanzer"
			},
			effect: {
				'en-us': "During your opponent's next turn, if Sandslash is damaged by an opponent's attack (even if Sandslash is Knocked Out), put 4 damage counters on the Attacking Pokémon.",
				'fr-fr': "Lors du prochain tour de votre adversaire, si une attaque de votre adversaire inflige des dégâts à Sablaireau (même s'il est mis K.O), placez 4 marqueurs de dégât sur le Pokémon Attaquant.",
				'de-de': "Wenn Sandamer während des nächsten Zuges deines Gegners durch einen Angriff deines Gegners Schaden erhält (auch wenn Sandamer dadurch kampfunfähig wird), lege 4 Schadensmarken auf das Angreifende Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Poison Spike",
				'fr-fr': "Pointe empoisonnée",
				'de-de': "Giftige Stacheln"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, that Pokémon is now Poisoned.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Empoisonné.",
				'de-de': "Wenn bereits Schadensmarken auf dem Verteidigenden Pokémon liegen, ist es jetzt vergiftet."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
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
		'en-us': "It curls up, then rolls into foes with its back. Its sharp spines inflict severe damage.",
		'fr-fr': "Il se met en boule pour percuter l'ennemi. Ses épines aiguisées font beaucoup de dégâts."
	},

	thirdParty: {
		cardmarket: 277690,
		tcgplayer: 88932
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
