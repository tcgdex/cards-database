import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Latias ex",
		'fr-fr': "Méga-Latias-ex",
		'de-de': "Mega-Latias-ex",
		'it-it': "Mega Latias-ex",
		'es-es': "Mega-Latias ex",
		'pt-br': "Mega Latias ex",
		'es-mx': "Mega-Latias ex"
	},

	suffix: "ex",
	illustrator: "AKIRA EGAWA",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],
	stage: "Basic",
	dexId: [380],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Strafe",
			'fr-fr': "Bombarder",
			'de-de': "Beharken",
			'it-it': "Mitragliare",
			'es-es': "Pasada de Ataque",
			'pt-br': "Bombardear",
			'es-mx': "Ataque de Revés"
		},

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			'it-it': "Puoi scambiare questo Pokémon con uno nella tua panchina.",
			'es-es': "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'es-mx': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca."
		},

		damage: 40
	}, {
		cost: ["Fire", "Psychic", "Colorless"],

		name: {
			'en-us': "Illusory Impulse",
			'fr-fr': "Impulsion Illusoire",
			'de-de': "Illusorischer Impuls",
			'it-it': "Impulso Illusorio",
			'es-es': "Impulso Ilusorio",
			'pt-br': "Impulso Ilusório",
			'es-mx': "Impulso Ilusorio"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 300
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851252,
				tcgplayer: 654520
			}
		},
	],
}

export default card
