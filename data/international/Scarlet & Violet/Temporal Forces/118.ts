import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [990],
	set: Set,

	name: {
		'en-us': "Iron Treads",
		'fr-fr': "Roue-de-Fer",
		'es-es': "Ferrodada",
		'it-it': "Solcoferreo",
		'pt-br': "Trilho Férreo",
		'de-de': "Eisenrad"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dual Core",
			'fr-fr': "Double Cœur",
			'es-es': "Doble Núcleo",
			'it-it': "Dual Core",
			'pt-br': "Dual Core",
			'de-de': "Dual-Core"
		},

		effect: {
			'en-us': "As long as this Pokémon has a Future Booster Energy Capsule attached, it is {F} and {M} type.",
			'fr-fr': "Tant qu'une Capsule Énergie Booster Temps Futur est attachée à ce Pokémon, il est de type {F} et {M}.",
			'es-es': "Mientras este Pokémon tenga un Tanque de Energía Potenciadora del Futuro unido, es de tipo {F} y {M}.",
			'it-it': "Fintanto che questo Pokémon ha una Capsula energetica Tempo Futuro assegnata, è di tipo {F} e {M}.",
			'pt-br': "Enquanto este Pokémon tiver uma Cápsula Energética de Melhoria Futurista ligada a ele, será de tipo {F} e {M}.",
			'de-de': "Solange 1 Energiekapsel aus der Zukunft an dieses Pokémon angelegt ist, ist es vom Typ {F} und {M}."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Wheel Pass",
			'fr-fr': "Déplacement sur Roue",
			'es-es': "Pase Rodante",
			'it-it': "Traslaruota",
			'pt-br': "Passe de Roda",
			'de-de': "Radtransfer"
		},

		effect: {
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 760748,
			tcgplayer: 542862
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 760748,
			tcgplayer: 542862
		}
	},
	{
		type: "normal",
		stamp: ["set-logo"],
		thirdParty: {
			cardmarket: 866038,
		}
	},
],

	illustrator: "Tonji Matsuno",

	description: {
		'en-us': "Sightings of this Pokémon have occurred in recent years. It resembles a mysterious object described in an old expedition journal.",
	},

	thirdParty: {
		cardmarket: 760748
	}
}

export default card