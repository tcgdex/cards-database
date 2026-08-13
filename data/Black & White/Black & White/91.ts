import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Bouffalant",
		fr: "Frison",
		es: "Bouffalant",
		it: "Bouffalant",
		pt: "Bouffalant",
		de: "Bisofank"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		626,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Revenge",
				fr: "Vendetta",
				de: "Vergeltung"
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 70 more damage.",
				fr: "Si l’un de vos Pokémon a été mis K.O. par les dégâts d'une attaque de votre adversaire lors de son dernier tour, cette attaque inflige 70 dégâts supplémentaires.",
				de: "Falls eins deiner Pokémon während des letzten Zuges deines Gegners durch einen gegnerischen Angriff kampfunfähig gemacht wurde, fügt dieser Angriff 70 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Head Charge",
				fr: "Peignée",
				de: "Steinschädel"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 20 dégâts.",
				de: "Wirf 1 Münze. Bei „Zahl“ fügt sich dieses Pokémon selbst 20 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Their fluffy fur absorbs damage, even if they strike foes with a fierce headbutt.",
		de: "Sein zotteliges Fell fängt selbst nach einer seiner wuchtigen Rempelattacken einiges an Schaden ab."
	},

	thirdParty: {
		cardmarket: 279828,
		tcgplayer: 83943
	}
}

export default card
