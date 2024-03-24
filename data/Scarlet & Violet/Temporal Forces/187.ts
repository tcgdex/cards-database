import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Incineroar ex",
		fr: "Félinferno-ex",
		es: "Incineroar ex",
		it: "Incineroar-ex",
		pt: "Incineroar ex",
		de: "Fuegro-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hustle Play",
			fr: "Jeu Pressé",
			es: "Juego Apremiante",
			it: "Energiocata",
			pt: "Cair pra Dentro",
			de: "Ins Zeug legen"
		},

		effect: {
			en: "Attacks used by this Pokémon cost Colorless less for each of your opponent's Benched Pokémon.",
			fr: "Les attaques utilisées par ce Pokémon coûtent Colorless de moins pour chacun des Pokémon de Banc de votre adversaire.",
			es: "Los ataques usados por este Pokémon cuestan Colorless menos por cada uno de los Pokémon en Banca de tu rival.",
			it: "Il costo degli attacchi usati da questo Pokémon è ridotto di Colorless per ogni Pokémon nella panchina del tuo avversario.",
			pt: "Os ataques usados por este Pokémon custam Colorless a menos para cada Pokémon no Banco do seu oponente.",
			de: "Die Kosten der von diesem Pokémon eingesetzten Attacken verringern sich für jedes Pokémon auf der Bank deines Gegners um Colorless."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Blaze Blast",
			fr: "Explosion Flamboyante",
			es: "Explosión Llameante",
			it: "Fiammata Esplosiva",
			pt: "Incêndio Explosivo",
			de: "Brandausbruch"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 240
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card