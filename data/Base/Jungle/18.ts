import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
		de: "Lektrobal",
		it: "Electrode"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
		it: "Voltorb"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle",
				it: "Azione"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Chain Lightning",
				fr: "Rafale de foudre",
				de: "Kettenblitz",
				it: "Saetta"
			},
			effect: {
				en: "If the Defending Pokémon isn't Colorless, this attack does 10 damage to each Benched Pokémon of the same type as the Defending Pokémon (including your own).",
				fr: "Si le Pokémon Défenseur n'est pas de type Incolore, cette attaque inflige 10 dégâts à chacun des Pokémon du même type que le Pokémon Défenseur qui sont sur un Banc (y compris le vôtre).",
				de: "Ist das Verteidigende Pokémon nicht farblos, fügt dieser Angriff jedem auf der Bank befindlichen Pokémon (einschließlich deiner eigenen) vom gleichen Typs wie das Verteidigende Pokémon 10 Schadenspunkte zu.",
				it: "Se il Pokémon Difensore non è di tipo Incolore, questo attacco infligge 10 danni a ogni Pokémon in Panchina dello stesso tipo del Pokémon Difensore (inclusi i tuoi)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "It stores electrical energy under very high pressure. It often explodes with little or no provocation.",
		fr: "Il emmagasine des quantités énormes de courant électrique sous pression pouvant exploser.",
		it: "Conserva energia elettrica sotto altissima pressione. Spesso esplode senza o con minima provocazione."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273799,
				tcgplayer: 106980
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273799,
				tcgplayer: 106980
			}
		}
	],
}

export default card
