import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [954],
	set: Set,

	name: {
		fr: "Bérasca",
		en: "Rabsca",
		es: "Rabsca",
		it: "Rabsca",
		pt: "Rabsca",
		de: "Skarabaks"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	evolveFrom: {
		fr: "Léboulérou",
		en: "Rellor",
		es: "Rellor",
		it: "Rellor",
		pt: "Rellor",
		de: "Relluk"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Second Souffle",
			en: "Revival Blessing",
			es: "Plegaria Vital",
			it: "Preghiera Vitale",
			pt: "Bênção do Reviver",
			de: "Vitalsegen"
		},

		effect: {
			fr: "Placez un Pokémon de votre pile de défausse sur votre Banc.",
			en: "Put a Pokémon from your discard pile onto your Bench.",
			es: "Pon 1 Pokémon de tu pila de descartes en tu Banca.",
			it: "Prendi un Pokémon dalla tua pila degli scarti e mettilo in panchina.",
			pt: "Coloque um Pokémon da sua pilha de descarte no seu Banco.",
			de: "Lege 1 Pokémon aus deinem Ablagestapel auf deine Bank."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			fr: "Rafale Psy",
			en: "Psybeam",
			es: "Psicorrayo",
			it: "Psicoraggio",
			pt: "Feixe Psíquico",
			de: "Psystrahl"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			en: "Your opponent's Active Pokémon is now Confused.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "nagimiso",

	thirdParty: {
		cardmarket: 715574
	}
}

export default card