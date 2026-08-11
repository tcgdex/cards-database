import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [381],
	set: Set,

	name: {
		'en-us': "Latios",
		'fr-fr': "Latios",
		'es-es': "Latios",
		'it-it': "Latios",
		'pt-br': "Latios",
		'de-de': "Latios"
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
		'en-us': "It understands human speech and is highly intelligent. It is a tender Pokémon that dislikes fighting."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Blue Assist",
			'fr-fr': "Assistance Bleue",
			'de-de': "Blauer Zuschuss",
			'es-es': "Asistencia Azul",
			'pt-br': "Assistência Anil",
			'it-it': "Assistente Blu"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a {P} Energy card from your hand to 1 of your Latias.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {P} de votre main à l'un de vos Latias.",
			'de-de': "Einmal während deines Zuges kannst du 1 {P}-Energiekarte aus deiner Hand an 1 deiner Latias anlegen.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía {P} de tu mano a 1 de tus Latias.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia {P} da sua mão a 1 dos seus Latias.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Latias una carta Energia {P} dalla tua mano."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Psychic", "Colorless"],

		name: {
			'en-us': "Luster Purge",
			'fr-fr': "Lumi-Éclat",
			'de-de': "Scheinwerfer",
			'es-es': "Resplandor",
			'pt-br': "Purga de Esplendor",
			'it-it': "Abbagliante"
		},

		damage: 210,

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582868,
				tcgplayer: 253351
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582868,
				tcgplayer: 253351
			}
		},
	],
}

export default card
