import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Golduck BREAK",
		'fr-fr': "Akwakwak TURBO",
		'es-es': "Golduck TURBO",
		'it-it': "Golduck TURBO",
		'pt-br': "Golduck TURBO",
		'de-de': "Entoron-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'es-es': "Golduck",
		'it-it': "Golduck",
		'pt-br': "Golduck",
		'de-de': "Entoron"
	},

	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Hyper Transfer",
				'fr-fr': "Hyper Transfert",
				'es-es': "Hipertraspaso",
				'it-it': "Ipertransfer",
				'pt-br': "Hiper Transferência",
				'de-de': "Hypertransfer"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move a basic Energy from 1 of your Pokémon to another of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 Energía Básica de 1 de tus Pokémon a otro de tus Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi spostare un'Energia base da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
				'pt-br': "Tantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você pode mover uma Energia básica de 1 dos seus Pokémon para outro dos seus Pokémon.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
			},
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 288193,
		tcgplayer: 111521
	}
}

export default card
