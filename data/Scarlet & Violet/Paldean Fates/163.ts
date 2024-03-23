import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Rabsca",
		fr: "Bérasca",
		es: "Rabsca",
		it: "Rabsca",
		pt: "Rabsca"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Revival Blessing",
			fr: "Second Souffle",
			es: "Plegaria Vital",
			it: "Preghiera Vitale",
			pt: "Bênção do Reviver"
		},

		effect: {
			en: "Put a Pokémon from your discard pile onto your Bench.",
			fr: "Placez un Pokémon de votre pile de défausse sur votre Banc.",
			es: "Pon 1 Pokémon de tu pila de descartes en tu Banca.",
			it: "Prendi un Pokémon dalla tua pila degli scarti e mettilo in panchina.",
			pt: "Coloque um Pokémon da sua pilha de descarte no seu Banco."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
			es: "Psicorrayo",
			it: "Psicoraggio",
			pt: "Feixe Psíquico"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card