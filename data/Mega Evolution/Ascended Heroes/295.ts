import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Dragonite ex",
		fr: "Méga-Dracolosse-ex",
		es: "Mega-Dragonite ex",
		'es-mx': "Mega-Dragonite ex",
		de: "Mega-Dragoran-ex",
		it: "Mega Dragonite-ex",
		pt: "Mega Dragonite ex"
	},

	illustrator: "aky CG Works",
	rarity: "Mega Hyper Rare",
	category: "Pokemon",
	hp: 370,
	types: ["Dragon"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sky Transport",
			fr: "Transport Ciel",
			es: "Transporte Aéreo",
			'es-mx': "Transporte Aéreo",
			de: "Himmelstransport",
			it: "Aerotrasporto",
			pt: "Transporte Aéreo"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Switch your Active Pokémon with 1 of your Benched Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Cambia tu Pokémon Activo por uno de tus Pokémon en Banca.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Scambia il tuo Pokémon attivo con uno nella tua panchina.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco."
		}
	}],

	attacks: [{
		cost: ["Water", "Lightning", "Lightning"],

		name: {
			en: "Ryuno Glide",
			fr: "Planement de Dragon",
			es: "Planeo del Dragón",
			'es-mx': "Planeo Dracónico",
			de: "Drachengleiten",
			it: "Dragaliante",
			pt: "Rasante do Dragão"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon."
		},

		damage: 330
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 676107,
		cardmarket: 869906
	}
}

export default card
