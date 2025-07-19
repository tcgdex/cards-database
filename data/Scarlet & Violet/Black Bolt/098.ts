import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Darmanitan",
		fr: "Darumacho",
		de: "Flampivian",
		it: "Darmanitan",
		pt: "Darmanitan",
		es: "Darmanitan",
		'es-mx': "Darmanitan"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
			de: "Sengende Flammen",
			it: "Fiamme Ustionanti",
			pt: "Chama Cauterizante",
			es: "Llama Abrasadora",
			'es-mx': "Llama Abrasadora"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		},

		damage: 50
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Smashing Headbutt",
			fr: "Coup d'Boule Fracassant",
			de: "Schmetternde Kopfnuss",
			it: "Bottintesta Distruttivo",
			pt: "Cabeçada Destruidora",
			es: "Cabezazo Destructor",
			'es-mx': "Cabezazo Devastador"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card