import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Emboar",
		'fr-fr': "Roitiflam",
		'es-es': "Emboar",
		'it-it': "Emboar",
		'pt-br': "Emboar",
		'de-de': "Flambirex"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		500,
	],

	hp: 150,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Inferno Fandango",
				'fr-fr': "Tango Infernal",
				'es-es': "Infierno Fandango",
				'it-it': "Fandango Infernale",
				'pt-br': "Inferno Fandango",
				'de-de': "Tango Inferno"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may attach a Fire Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fire de votre main à 1 de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes unir una carta de Energía Fire de tu mano a 1 de tus Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi assegnare a piacimento le carte Energia Fire che hai in mano ai tuoi Pokémon.",
				'pt-br': "Sempre que desejar, na sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Fire da sua mão a 1 dos seus Pokémon.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Fire-Energiekarte von deiner Hand an 1 deiner Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Crash",
				'fr-fr': "Tacle Feu",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
	},

	thirdParty: {
		cardmarket: 280325,
		tcgplayer: 85184
	}
}

export default card
