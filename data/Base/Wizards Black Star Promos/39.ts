import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
		de: "Traunfugil"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pain Split",
				fr: "Balance",
				de: "Leidteiler"
			},
			effect: {
				en: "Put 1 damage counter on the Defending Pokémon for each damage counter on Misdreavus.",
				fr: "Placez un marqueur de dégâts sur le Pokémon Défenseur pour chaque marqueur de dégâts sur Feuforêve.",
				de: "Lege für jede Schadensmarke auf Traunfugil eine Schadensmarke auf das verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei Kopf ist das verteidigende Pokémon jetzt verwirrt."
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "It loves to bite and yank people's hair from behind without warning, just to see their shocked reactions.",
		fr: "Il adore mordre et tirer les cheveux des gens par surprise, rien que pour voir leur expression horrifiée.",
		de: "Es beißt gerne Leute von hinten oder zieht sie ohne Vorwarnung an den Haaren, nur um ihre schockierte Reaktion zu sehen."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87503
			},
		}
	]
}

export default card
