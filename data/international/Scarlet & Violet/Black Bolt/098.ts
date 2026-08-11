import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [555],
	set: Set,

	name: {
		'en-us': "Darmanitan",
		'fr-fr': "Darumacho",
		'de-de': "Flampivian",
		'it-it': "Darmanitan",
		'pt-br': "Darmanitan",
		'es-es': "Darmanitan",
		'es-mx': "Darmanitan"
	},

	illustrator: "Nisota Niso",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond",
		'de-de': "Flampion",
		'it-it': "Darumaka",
		'pt-br': "Darumaka",
		'es-es': "Darumaka",
		'es-mx': "Darumaka"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Searing Flame",
			'fr-fr': "Flammes Calcinantes",
			'de-de': "Sengende Flammen",
			'it-it': "Fiamme Ustionanti",
			'pt-br': "Chama Cauterizante",
			'es-es': "Llama Abrasadora",
			'es-mx': "Llama Abrasadora"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		},

		damage: 50
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Smashing Headbutt",
			'fr-fr': "Coup d'Boule Fracassant",
			'de-de': "Schmetternde Kopfnuss",
			'it-it': "Bottintesta Distruttivo",
			'pt-br': "Cabeçada Destruidora",
			'es-es': "Cabezazo Destructor",
			'es-mx': "Cabezazo Devastador"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836102,
				tcgplayer: 642548
			}
		},
	]
}

export default card
