import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'es-es': "Weavile",
		'it-it': "Weavile",
		'pt-br': "Weavile",
		'de-de': "Snibunna"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Tear Away",
				'fr-fr': "Arrachement",
				'es-es': "Arrancar",
				'it-it': "Strappo",
				'pt-br': "Romper",
				'de-de': "Wegreißen"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may put a Pokémon Tool card attached to 1 of your Pokémon into your hand.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à l'un de vos Pokémon dans votre main.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes poner 1 carta de Herramienta Pokémon unida a 1 de tus Pokémon en tu mano.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi aggiungere alle carte che hai in mano una carta Oggetto Pokémon assegnata a uno dei tuoi Pokémon tutte le volte che vuoi.",
				'pt-br': "Tantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você pode colocar um card de Ferramenta Pokémon ligado a 1 dos seus Pokémon na sua mão.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Pokémon-Ausrüstung, die an 1 deiner Pokémon angelegt ist, auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
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
		'en-us': "They live in cold regions, forming groups of four or five that hunt prey with impressive coordination.",
	},

	thirdParty: {
		cardmarket: 291631,
		tcgplayer: 121191
	}
}

export default card
