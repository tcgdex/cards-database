import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Alolan Dugtrio",
		'fr-fr': "Triopikeur d’Alola",
		'es-es': "Dugtrio de Alola",
		'it-it': "Dugtrio di Alola",
		'pt-br': "Dugtrio de Alola",
		'de-de': "Alola-Digdri"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Alolan Diglett",
		'fr-fr': "Taupiqueur d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Digging Dash",
				'fr-fr': "Cours et Creuse",
				'es-es': "Choque Excavación",
				'it-it': "Corsa Escavatrice",
				'pt-br': "Arremetida Subterrânea",
				'de-de': "Schaufellauf"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
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
		'en-us': "These Pokémon are cherished in the Alola region, where they are thought to be feminine deities of the land incarnate.",
	},

	thirdParty: {
		cardmarket: 365760,
		tcgplayer: 178938
	}
}

export default card
