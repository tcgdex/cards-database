import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Butterfree V",
		'fr-fr': "Papilusion V",
		'es-es': "Butterfree V",
		'it-it': "Butterfree V",
		'pt-br': "Butterfree V",
		'de-de': "Smettbo V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [12],
	set: Set,
	hp: 190,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Dizzying Poison",
				'fr-fr': "Poison Étourdissant",
				'es-es': "Veneno Mareante",
				'it-it': "Stordiveleno",
				'pt-br': "Veneno Vertiginoso",
				'de-de': "Schwindelerregendes Gift"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Blasting Wind",
				'fr-fr': "Vent Impitoyable",
				'es-es': "Vientos Explosivos",
				'it-it': "Vento Distruttivo",
				'pt-br': "Vendaval Avassalador",
				'de-de': "Peitschender Wind"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483774,
				tcgplayer: 219297
			}
		},
	],
}

export default card
