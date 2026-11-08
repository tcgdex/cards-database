import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Dragonite ex",
		'fr-fr': "Méga-Dracolosse-ex",
		'es-es': "Mega-Dragonite ex",
		'es-mx': "Mega-Dragonite ex",
		'de-de': "Mega-Dragoran-ex",
		'it-it': "Mega Dragonite-ex",
		'pt-br': "Mega Dragonite ex"
	},
	evolveFrom: {
		'en-us': "Dragonair",
		'de-de': "Dragonir",
		'es-es': "Dragonair",
		'fr-fr': "Draco",
		'it-it': "Dragonair",
		'pt-br': "Dragonair",
	},

	suffix: "ex",
	illustrator: "DOM",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 370,
	types: ["Dragon"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sky Transport",
			'fr-fr': "Transport Ciel",
			'es-es': "Transporte Aéreo",
			'es-mx': "Transporte Aéreo",
			'de-de': "Himmelstransport",
			'it-it': "Aerotrasporto",
			'pt-br': "Transporte Aéreo"
		},

		effect: {
			'en-us': "Once during your turn, you may use this Ability. Switch your Active Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
			'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Cambia tu Pokémon Activo por uno de tus Pokémon en Banca.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
			'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Scambia il tuo Pokémon attivo con uno nella tua panchina.",
			'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco."
		}
	}],

	attacks: [{
		cost: ["Water", "Lightning", "Lightning"],

		name: {
			'en-us': "Ryuno Glide",
			'fr-fr': "Planement de Dragon",
			'es-es': "Planeo del Dragón",
			'es-mx': "Planeo Dracónico",
			'de-de': "Drachengleiten",
			'it-it': "Dragaliante",
			'pt-br': "Rasante do Dragão"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon."
		},

		damage: 330
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869882,
				tcgplayer: 676083
			}
		}
	],
}

export default card
