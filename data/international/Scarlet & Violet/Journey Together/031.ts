import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [721],
	set: Set,

	name: {
		'en-us': "Volcanion ex",
		'fr-fr': "Volcanion-ex",
		'es-es': "Volcanion ex",
		'de-de': "Volcanion-ex",
		'it-it': "Volcanion-ex",
		'pt-br': "Volcanion ex",
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
			'en-us': "Scalding Steam",
			'fr-fr': "Vapeur Brûlante",
			'es-es': "Vapor Hirviente",
			'de-de': "Siedender Dampf",
			'it-it': "Scottavapore",
			'pt-br': "Vapor Vulcânico",
			'es-mx': "Vapor Hirviente"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent's Active Pokémon Burned.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes dejar al Pokémon Activo de tu rival Quemado.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du das Aktive Pokémon deines Gegners verbrennen.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi lasciare il Pokémon attivo del tuo avversario bruciato.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá deixar o Pokémon Ativo do seu oponente Queimado.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes dejar Quemado al Pokémon Activo de tu rival."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Scorching Cyclone",
			'fr-fr': "Cyclone Incandescent",
			'es-es': "Ciclón Abrasador",
			'de-de': "Versengender Wirbel",
			'it-it': "Ciclone Ustionante",
			'pt-br': "Ciclone Abrasador",
			'es-mx': "Ciclón Calcinante"
		},

		effect: {
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'es-mx': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",
	suffix: "ex",
	illustrator: "5ban Graphics",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817183,
				tcgplayer: 623458
			}
		},
	],
}

export default card
