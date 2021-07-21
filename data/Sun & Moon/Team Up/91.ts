import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		571,
	],
	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Taunt",
				fr: "Provoc",
				es: "Mofa",
				it: "Provocazione",
				pt: "Insulto",
				de: "Verhöhner"
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Night Punishment",
				fr: "Punition Nocturne",
				es: "Castigo Nocturno",
				it: "Punizione Notturna",
				pt: "Punição Noturna",
				de: "Nachtstrafe"
			},
			effect: {
				en: "This attack does 20 damage for each Pokémon in your discard pile. You can’t do more than 200 damage in this way.",
				fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse. Vous ne pouvez pas infliger plus de 200 dégâts de cette façon.",
				es: "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes. No puedes hacer más de 200 puntos de daño de esta manera.",
				it: "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti. Non puoi infliggere più di 200 danni in questo modo.",
				pt: "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte. Você não pode causar mais de 200 pontos de dano desta forma.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Pokémon in deinem Ablagestapel zu. Du kannst auf diese Weise höchstens 200 Schadenspunkte zufügen."
			},
			damage: "20×",

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
	retreat: 2,



}

export default card
