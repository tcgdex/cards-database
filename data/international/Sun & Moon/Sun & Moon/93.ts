import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Ribombee",
		'fr-fr': "Rubombelle",
		'es-es': "Ribombee",
		'it-it': "Ribombee",
		'pt-br': "Ribombee",
		'de-de': "Bandelby"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		743,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Cutiefly",
		'fr-fr': "Bombydou",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Curative Pollen",
				'fr-fr': "Pollen Curatif",
				'es-es': "Polen Curativo",
				'it-it': "Curapolline",
				'pt-br': "Pólen Curador",
				'de-de': "Heilender Pollen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may heal 20 damage from 1 of your Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à l’un de vos Pokémon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes curar 20 puntos de daño a 1 de tus Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi curare uno dei tuoi Pokémon da 20 danni.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 20 pontos de dano de 1 dos seus Pokémon.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 20 Schadenspunkte bei 1 deiner Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Fairy Wind",
				'fr-fr': "Vent Féérique",
				'es-es': "Viento Feérico",
				'it-it': "Vento di Fata",
				'pt-br': "Vento de Fada",
				'de-de': "Feenbrise"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It rolls up pollen into puffs. It makes many different varieties, some used as food and others used in battle.",
	},

	thirdParty: {
		cardmarket: 295404,
		tcgplayer: 126965
	}
}

export default card
