import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [386],
	set: Set,

	name: {
		'en-us': "Deoxys",
		'fr-fr': "Deoxys",
		'es-es': "Deoxys",
		'it-it': "Deoxys",
		'pt-br': "Deoxys",
		'de-de': "Deoxys"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Psypunch",
			'fr-fr': "Coup de Poing Psy",
			'es-es': "Psicopuño",
			'it-it': "Psicopugno",
			'pt-br': "Soco Psíquico",
			'de-de': "Psyhieb"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			'en-us': "Genome Spiral",
			'fr-fr': "Spirale Génome",
			'es-es': "Espiral Genoma",
			'it-it': "Spirale del Genoma",
			'pt-br': "Genoma Espiralado",
			'de-de': "Genom-Spirale"
		},

		effect: {
			'en-us': "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
			'fr-fr': "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc comme il vous plaît.",
			'es-es': "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
			'it-it': "Sposta tutte le Energie da questo Pokémon a quelli nella tua panchina nel modo che preferisci.",
			'pt-br': "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
			'de-de': "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "DNA from a space virus mutated and became a Pokémon. It appears where auroras are seen.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740566,
				tcgplayer: 523734,
				cardtrader: 265183
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740566,
				tcgplayer: 523734,
				cardtrader: 265183
			}
		},
	],

	illustrator: "Saya Tsuruta",

	
}

export default card
