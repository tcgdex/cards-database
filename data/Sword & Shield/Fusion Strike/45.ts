import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		en: "Cinderace VMAX",
		fr: "Pyrobut VMAX",
		es: "Cinderace VMAX",
		it: "Cinderace VMAX",
		pt: "Cinderace VMAX",
		de: "Liberlo VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		en: "Cinderace V",
		fr: "Pyrobut-V",
		es: "Cinderace V",
		it: "Cinderace-V",
		pt: "Cinderace V",
		de: "Liberlo-V"
	},

	stage: "VMAX",
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "G-Max Fireball",
			fr: "Pyroball G-Max",
			de: "Giga-Brandball",
			es: "Gigaesfera Ígnea",
			pt: "Bola de Chamas G-Max",
			it: "Gigafiammopalla"
		},

		damage: 230,

		effect: {
			en: "Your opponent's Active Pokémon is now Burned. During your next turn, this Pokémon can't attack.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé. Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt. Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado. Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado. Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato. Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
