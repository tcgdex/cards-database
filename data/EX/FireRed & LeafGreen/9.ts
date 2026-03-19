import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
		de: "Nidoqueen"
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
		en: "Nidorina",
		fr: "Nidorina"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Family Bonds",
				fr: "Liens familiaux",
				de: "Famiienbande"
			},
			effect: {
				en: "As long as Nidoqueen is in play, the Retreat Cost for Nidoran ♀, Nidorina, Nidoran ♂, Nidorino and Nidoking is 0.",
				fr: "Tant que Nidoqueen est en jeu, le Coût de retraite de Nidoran ♀, Nidorina, Nidoran ♂, Nidorino et Nidoking est de 0.",
				de: "Solange Nidoqueen im Spiel ist, haben Nioran, Nidorina, Nidorino und Nidoking Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Toxic",
				fr: "Toxik",
				de: "Toxin"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât sur le Pokémon Défenseur au lieu d'1 entre deux tours.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Lariat",
				fr: "Lasso puissant",
				de: "Powerlasso"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Evolved Pokémon you have in play.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon Évolué que vous avez en jeu.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere für jedes entwickelte Pokémon zu, das du im Spiel hast."
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

	thirdParty: {
		cardmarket: 276185,
		tcgplayer: 87707
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			foil: "energy"
		},
		{
			type: "holo",
			stamp: ["jeremy-maron"]
		}
	]
}

export default card
