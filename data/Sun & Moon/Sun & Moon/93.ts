import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Ribombee",
		fr: "Rubombelle",
		es: "Ribombee",
		it: "Ribombee",
		pt: "Ribombee",
		de: "Bandelby"
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
		en: "Cutiefly",
		fr: "Bombydou",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Curative Pollen",
				fr: "Pollen Curatif",
				es: "Polen Curativo",
				it: "Curapolline",
				pt: "Pólen Curador",
				de: "Heilender Pollen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 20 damage from 1 of your Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à l’un de vos Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes curar 20 puntos de daño a 1 de tus Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi curare uno dei tuoi Pokémon da 20 danni.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 20 pontos de dano de 1 dos seus Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 20 Schadenspunkte bei 1 deiner Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
				es: "Viento Feérico",
				it: "Vento di Fata",
				pt: "Vento de Fada",
				de: "Feenbrise"
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

	thirdParty: {
		cardmarket: 295404,
		tcgplayer: 126965
	}
}

export default card
