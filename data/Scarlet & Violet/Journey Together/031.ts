import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Volcanion ex",
		fr: "Volcanion-ex",
		es: "Volcanion ex",
		de: "Volcanion-ex",
		it: "Volcanion-ex",
		pt: "Volcanion ex",
		'es-mx': "Volcanion ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Scalding Steam",
			fr: "Vapeur Brûlante",
			es: "Vapor Hirviente",
			de: "Siedender Dampf",
			it: "Scottavapore",
			pt: "Vapor Vulcânico",
			'es-mx': "Vapor Hirviente"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent's Active Pokémon Burned.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes dejar al Pokémon Activo de tu rival Quemado.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du das Aktive Pokémon deines Gegners verbrennen.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi lasciare il Pokémon attivo del tuo avversario bruciato.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá deixar o Pokémon Ativo do seu oponente Queimado.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes dejar Quemado al Pokémon Activo de tu rival."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Scorching Cyclone",
			fr: "Cyclone Incandescent",
			es: "Ciclón Abrasador",
			de: "Versengender Wirbel",
			it: "Ciclone Ustionante",
			pt: "Ciclone Abrasador",
			'es-mx': "Ciclón Calcinante"
		},

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'es-mx': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
