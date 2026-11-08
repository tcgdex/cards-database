import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [419],
	set: Set,

	name: {
		'en-us': "Floatzel",
		'fr-fr': "Mustéflott",
		'de-de': "Bojelin",
		'it-it': "Floatzel",
		'es-es': "Floatzel",
		'pt-br': "Floatzel",
		'es-mx': "Floatzel"
	},


	illustrator: "Shibuzoh.",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Buizel",
		'fr-fr': "Mustébouée",
		'de-de': "Bamelin",
		'it-it': "Buizel",
		'es-es': "Buizel",
		'pt-br': "Buizel",
		'es-mx': "Buizel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Whirlpool",
			'fr-fr': "Siphon",
			'de-de': "Whirlpool",
			'it-it': "Mulinello",
			'es-es': "Torbellino",
			'pt-br': "Redemoinho",
			'es-mx': "Remolino"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'pt-br': "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Descarta 1 Energía del Pokémon Activo de tu rival."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Aqua Slash",
			'fr-fr': "Aqua Slash",
			'de-de': "Aquaschlag",
			'it-it': "Idrosquarcio",
			'es-es': "Cuchillada Acuática",
			'pt-br': "Aqua Corte",
			'es-mx': "Cuchillada Acuática"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825932,
				tcgplayer: 632871
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825932,
				tcgplayer: 632871
			}
		},
	],
}

export default card
