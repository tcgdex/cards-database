import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Bloodmoon Ursaluna ex",
		fr: "Ursaking Lune Vermeille-ex",
		es: "Ursaluna Luna Carmesí ex",
		it: "Ursaluna Luna Cremisi-ex",
		pt: "Ursaluna Lua Sangrenta ex",
		de: "Blutmond-Ursaluna-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Seasoned Skill",
			fr: "Compétence Maîtrisée",
			es: "Habilidad Demostrada",
			it: "Talento Esperto",
			pt: "Talento Inato",
			de: "Routiniertes Geschick"
		},

		effect: {
			en: "Blood Moon used by this Pokémon costs Colorless less for each Prize card your opponent has taken.",
			fr: "Lune Rouge utilisée par ce Pokémon coûte Colorless de moins pour chaque carte Récompense que votre adversaire a récupérée.",
			es: "El ataque Luna Roja usado por este Pokémon cuesta Colorless menos por cada carta de Premio que haya cogido tu rival.",
			it: "Il costo dell'attacco Luna Rossa usato da questo Pokémon è ridotto di Colorless per ogni carta Premio presa dal tuo avversario.",
			pt: "O ataque Luar de Sangue usado por este Pokémon custa Colorless a menos para cada carta de Prêmio que seu oponente pegou.",
			de: "Die Kosten der von diesem Pokémon eingesetzten Attacke Blutmond verringern sich für jede von deinem Gegner genommene Preiskarte um Colorless."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Blood Moon",
			fr: "Lune Rouge",
			es: "Luna Roja",
			it: "Luna Rossa",
			pt: "Luar de Sangue",
			de: "Blutmond"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 240
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card