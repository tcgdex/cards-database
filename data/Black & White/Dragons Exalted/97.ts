import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
		es: "Hydreigon",
		it: "Hydreigon",
		pt: "Hydreigon",
		de: "Trikephalo"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		635,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Trance",
				fr: "Transe Obscure",
				es: "Trance Siniestro",
				it: "Ipnoscuro",
				pt: "Transe Sombrio",
				de: "Dunkle Dämmerung"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Darkness Energy attached to 1 of your Pokémon to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Darkness attachée à 1 de vos Pokémon vers un autre de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover una Energía Darkness unida a 1 de tus Pokémon a otro de tus Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi spostare a piacimento una carta Energia Darkness assegnata ai tuoi Pokémon.",
				pt: "Tantas vezes quanto desejar em sua vez de jogar (antes de atacar), você pode mover uma Energia Darkness ligada a 1 dos seus Pokémon para outro dos seus Pokémon.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Darkness-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dragonblast",
				fr: "Dracoxplosion",
			},
			effect: {
				en: "Discard 2 Darkness Energy attached to this Pokémon.",
				fr: "Défaussez 2 Énergies Darkness attachées à ce Pokémon.",
			},
			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
