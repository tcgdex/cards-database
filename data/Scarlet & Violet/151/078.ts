import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [78],
	set: Set,

	name: {
		fr: "Galopa",
		en: "Rapidash",
		es: "Rapidash",
		it: "Rapidash",
		pt: "Rapidash",
		de: "Gallopa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Roussi",
			en: "Singe",
			es: "Quemadura",
			it: "Scottata",
			pt: "Chamuscada",
			de: "Versengung"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			en: "Your opponent's Active Pokémon is now Burned.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			fr: "Tour Supersonique",
			en: "Mach Turn",
			es: "Giro Mach",
			it: "Girata Mach",
			pt: "Retorno Supersônico",
			de: "Tempowende"
		},

		effect: {
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card