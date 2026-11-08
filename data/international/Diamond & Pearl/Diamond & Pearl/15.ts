import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Skuntank",
		'fr-fr': "Moufflair",
		'de-de': "Skuntank"
	},

	illustrator: "Hiroaki Ito",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		435,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Stunky",
		'fr-fr': "Moufouette",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Frustration",
				'fr-fr': "Frustration",
				'de-de': "Frustration"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon that doesn't have any damage counters on it. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire ne possédant pas de marqueurs de dégât. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners, auf dem keine Schadensmarken liegen. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Toxic Cloud",
				'fr-fr': "Nuage Toxik",
				'de-de': "Giftschwaden"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das Verteidigende Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It sprays a vile-smelling fluid from the tip of its tail to attack. Its range is over 160 feet.",
		'fr-fr': "Il attaque en projetant un liquide fétide du bout de sa queue. Il peut tirer à 50 mètres."
	},

	thirdParty: {
		cardmarket: 277514,
		tcgplayer: 89279
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse"
		}
	]
}

export default card
