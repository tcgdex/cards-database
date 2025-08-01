import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Aromatisse",
		fr: "Cocotine",
		es: "Aromatisse",
		it: "Aromatisse",
		pt: "Aromatisse",
		de: "Parfinesse"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		683,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Spritzee",
		fr: "Fluvetin",
		es: "Spritzee",
		it: "Spritzee",
		pt: "Spritzee",
		de: "Parfi"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fairy Transfer",
				fr: "Transfert Féérique",
				es: "Traspaso Hada",
				it: "Transferfatato",
				pt: "Transferência de Fada",
				de: "Feentransfer"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Fairy Energy attached to 1 of your Pokémon to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Fairy attachée à l'un de vos Pokémon vers un autre de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 Energía Fairy unida a 1 de tus Pokémon a otro de tus Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi spostare a piacimento le carte Energia Fairy assegnate ai tuoi Pokémon.",
				pt: "Tantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você pode mover uma Energia Fairy ligada a 1 dos seus Pokémon para outro dos seus Pokémon.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Fairy-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
				es: "Viento Feérico",
				it: "Vento di Fata",
				pt: "Vento de Fada",
				de: "Feenbrise"
			},

			damage: 60,

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

	retreat: 2,

	thirdParty: {
		cardmarket: 281430
	}
}

export default card
