import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Klinklang",
		'fr-fr': "Cliticlic",
		'es-es': "Klinklang",
		'it-it': "Klinklang",
		'pt-br': "Klinklang",
		'de-de': "Klikdiklak"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		601,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Klang",
		'fr-fr': "Clic",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shift Gear",
				'fr-fr': "Chgt Vitesse",
				'es-es': "Cambiomarcha",
				'it-it': "Cambiomarcia",
				'pt-br': "Troca de Marcha",
				'de-de': "Gangwechsel"
			},
			effect: {
				'en-us': "As often as you would like during your turn (before your attack), you may move a Metal Energy attached to 1 of your Pokémon to another of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie Metal attachée à l’un de vos Pokémon vers un autre de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover una Energía Metal unida a 1 de tus Pokémon a otro de tus Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi distribuire a piacimento le Energie Metal assegnate ai tuoi Pokémon.",
				'pt-br': "Sempre que desejar, na sua vez de jogar (antes de atacar), você poderá mover uma Energia Metal ligada a 1 dos seus Pokémon para outro dos seus Pokémon.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Metal-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gear Grind",
				'fr-fr': "Lancécrou",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 80 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 80,

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

	retreat: 3,

	description: {
		'en-us': "Its red core functions as an energy tank. It fires the charged energy through its spikes into an area.",
	},

	thirdParty: {
		cardmarket: 279814,
		tcgplayer: 86485
	}
}

export default card
