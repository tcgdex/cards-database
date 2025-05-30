import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Houndoom",
		fr: "Démolosse de la Team Rocket",
		de: "Team Rockets Hundemon",
		it: "Houndoom del Team Rocket",
		es: "Houndoom del Team Rocket",
		pt: "Houndoom da Equipe Rocket",
		'es-mx': "Houndoom del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Cruel Coal",
			fr: "Charbon Cruel",
			de: "Krude Kohle",
			it: "Carboni Crudeli",
			es: "Carbón Cruel",
			pt: "Carvão Cruel",
			'es-mx': "Carbón Cruel"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned and Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato e confuso.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido y Quemado.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso e Queimado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido y Quemado."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Scorching Fire",
			fr: "Feu Infernal",
			de: "Versengendes Feuer",
			it: "Fuoco Ustionante",
			es: "Fuego Abrasador",
			pt: "Fogo Ardente",
			'es-mx': "Fuego Ardiente"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card