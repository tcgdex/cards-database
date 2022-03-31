import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Golduck BREAK",
		fr: "Akwakwak TURBO",
		es: "Golduck TURBO",
		it: "Golduck TURBO",
		pt: "Golduck TURBO",
		de: "Entoron-TURBO"
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
		en: "Golduck",
		fr: "Akwakwak",
		es: "Golduck",
		it: "Golduck",
		pt: "Golduck",
		de: "Entoron"
	},

	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hyper Transfer",
				fr: "Hyper Transfert",
				es: "Hipertraspaso",
				it: "Ipertransfer",
				pt: "Hiper Transferência",
				de: "Hypertransfer"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a basic Energy from 1 of your Pokémon to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 Energía Básica de 1 de tus Pokémon a otro de tus Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi spostare un'Energia base da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
				pt: "Tantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você pode mover uma Energia básica de 1 dos seus Pokémon para outro dos seus Pokémon.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
			},
		},
	],

	retreat: 0
}

export default card
