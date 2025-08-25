import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [381],
	set: Set,

	name: {
		en: "Latios",
		fr: "Latios",
		es: "Latios",
		it: "Latios",
		pt: "Latios",
		de: "Latios"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "hatachu",

	description: {
		en: "It understands human speech and is highly intelligent. It is a tender Pokémon that dislikes fighting."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Blue Assist",
			fr: "Assistance Bleue",
			de: "Blauer Zuschuss",
			es: "Asistencia Azul",
			pt: "Assistência Anil",
			it: "Assistente Blu"
		},

		effect: {
			en: "Once during your turn, you may attach a {P} Energy card from your hand to 1 of your Latias.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {P} de votre main à l'un de vos Latias.",
			de: "Einmal während deines Zuges kannst du 1 {P}-Energiekarte aus deiner Hand an 1 deiner Latias anlegen.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía {P} de tu mano a 1 de tus Latias.",
			pt: "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia {P} da sua mão a 1 dos seus Latias.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Latias una carta Energia {P} dalla tua mano."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Psychic", "Colorless"],

		name: {
			en: "Luster Purge",
			fr: "Lumi-Éclat",
			de: "Scheinwerfer",
			es: "Resplandor",
			pt: "Purga de Esplendor",
			it: "Abbagliante"
		},

		damage: 210,

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 2 Energías de este Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			it: "Scarta due Energie da questo Pokémon."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582868,
		tcgplayer: 253351
	}
}

export default card