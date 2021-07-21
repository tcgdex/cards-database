import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Lunala",
		fr: "Lunala",
		es: "Lunala",
		it: "Lunala",
		pt: "Lunala",
		de: "Lunala"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		792,
	],
	hp: 160,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shatter Shot",
				fr: "Coup Fracassant",
				es: "Proyectil Estallido",
				it: "Frantumacolpo",
				pt: "Tiro de Estilhaçar",
				de: "Splitterschuss"
			},
			effect: {
				en: "This attack does 40 damage times the amount of Psychic Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 40 dégâts multipliés par le nombre d’Énergies Psychic attachées à ce Pokémon.",
				es: "Este ataque hace 40 puntos de daño por cada Energía Psychic unida a este Pokémon.",
				it: "Questo attacco infligge 40 danni per ogni Energia Psychic assegnata a questo Pokémon.",
				pt: "Este ataque causa 40 pontos de dano vezes a quantidade de Energia Psychic ligada a este Pokémon.",
				de: "Diese Attacke fügt 40 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Psychic-Energien zu."
			},
			damage: "40×",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Wings of the Moone",
				fr: "Ailes du Halo Lunaire",
				es: "Alas de la Luna",
				it: "Ali Lunari",
				pt: "Asas Lunares",
				de: "Mondscheiben-Flügel"
			},
			effect: {
				en: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
				fr: "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc, de la manière que vous voulez.",
				es: "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
				it: "Sposta a piacimento tutte le Energie da questo Pokémon a quelli nella tua panchina.",
				pt: "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
				de: "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
