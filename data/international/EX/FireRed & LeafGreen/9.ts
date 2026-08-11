import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Nidoqueen",
		'fr-fr': "Nidoqueen",
		'de-de': "Nidoqueen"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Family Bonds",
				'fr-fr': "Liens familiaux",
				'de-de': "Famiienbande"
			},
			effect: {
				'en-us': "As long as Nidoqueen is in play, the Retreat Cost for Nidoran ♀, Nidorina, Nidoran ♂, Nidorino and Nidoking is 0.",
				'fr-fr': "Tant que Nidoqueen est en jeu, le Coût de retraite de Nidoran ♀, Nidorina, Nidoran ♂, Nidorino et Nidoking est de 0.",
				'de-de': "Solange Nidoqueen im Spiel ist, haben Nioran, Nidorina, Nidorino und Nidoking Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Toxic",
				'fr-fr': "Toxik",
				'de-de': "Toxin"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât sur le Pokémon Défenseur au lieu d'1 entre deux tours.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Lariat",
				'fr-fr': "Lasso puissant",
				'de-de': "Powerlasso"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Evolved Pokémon you have in play.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon Évolué que vous avez en jeu.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere für jedes entwickelte Pokémon zu, das du im Spiel hast."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276185,
				tcgplayer: 87707
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276185,
				tcgplayer: 87707
			},
		},
		{
			type: "holo",
			stamp: ["jeremy-maron"],
			thirdParty: {
				cardmarket: 871516,
				tcgplayer: 477557
			}
		}
	]
}

export default card
