import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraiste",
		es: "Quagsire",
		it: "Quagsire",
		pt: "Quagsire",
		de: "Morlord"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		195,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wash Out",
				fr: "Surlavage",
				es: "Hacer Limpieza",
				it: "Sciacquare",
				pt: "Lavagem",
				de: "Wegspülen"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Water Energy from 1 of your Benched Pokémon to your Active Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Water de l’un de vos Pokémon de Banc vers votre Pokémon Actif.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 Energía Water de 1 de tus Pokémon en Banca a tu Pokémon Activo.",
				it: "Durante il tuo turno, prima di attaccare, puoi spostare un’Energia Water da uno dei tuoi Pokémon in panchina al tuo Pokémon attivo tutte le volte che vuoi.",
				pt: "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode mover 1 Energia Water de 1 dos seus Pokémon no Banco para o seu Pokémon Ativo.",
				de: "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 Water-Energie von 1 Pokémon auf deiner Bank auf dein Aktives Pokémon verschieben."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				es: "Hidrobomba",
				it: "Idropompa",
				pt: "Jato d’Água",
				de: "Hydropumpe"
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
