import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		617,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Retribution",
				fr: "Rétribution",
			},
			effect: {
				en: "If an Escavalier you had in play was Knocked Out by damage from an opponent's attack during his or her last turn, put all Energy attached to the Defending Pokémon into your opponent's hand.",
				fr: "Si un Lançargot que vous aviez en jeu a été mis K.O. par les dégâts d'une attaque de votre adversaire pendant son dernier tour, mettez toutes les Énergies attachées au Pokémon Défenseur dans la main de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Signal Beam",
				fr: "Rayon signal",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
