import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer",
		'de-de': "Iksbat"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [169],

	hp: 130,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Severe Poison",
				'fr-fr': "Poison violent",
				'de-de': "Pures Gift"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Placez 4 marqueurs de dégât au lieu d’un seul sur ce Pokémon entre deux tours.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet. Lege zwischen den Zügen 4 Schadensmarken anstelle von 1 Schadensmarke auf das Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Skill Dive",
				'fr-fr': "Plongeon contrôlé",
				'de-de': "Geübter Sturzflug"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279170,
				tcgplayer: 84489
			}
		},
	],
}

export default card
