import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Latias ex",
		fr: "Méga-Latias-ex",
		de: "Mega-Latias-ex",
		it: "Mega Latias-ex",
		es: "Mega-Latias ex",
		pt: "Mega Latias ex",
		'es-mx': "Mega-Latias ex"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],
	stage: "Basic",
	dexId: [380],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Strafe",
			fr: "Bombarder",
			de: "Beharken",
			it: "Mitragliare",
			es: "Pasada de Ataque",
			pt: "Bombardear",
			'es-mx': "Ataque de Revés"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			it: "Puoi scambiare questo Pokémon con uno nella tua panchina.",
			es: "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'es-mx': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca."
		},

		damage: 40
	}, {
		cost: ["Fire", "Psychic", "Colorless"],

		name: {
			en: "Illusory Impulse",
			fr: "Impulsion Illusoire",
			de: "Illusorischer Impuls",
			it: "Impulso Illusorio",
			es: "Impulso Ilusorio",
			pt: "Impulso Ilusório",
			'es-mx': "Impulso Ilusorio"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 300
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 657846,
		cardmarket: 851063
	}
}

export default card