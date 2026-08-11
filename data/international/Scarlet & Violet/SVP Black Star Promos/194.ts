import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [939],
	set: Set,

	name: {
		'en-us': "Iono's Bellibolt ex",
		'fr-fr': "Ampibidou-ex de Mashynn",
		'de-de': "Enigmaras Wampitz-ex",
		'es-es': "Bellibolt ex de e-Nigma",
		'it-it': "Bellibolt-ex di Kissara",
		'pt-br': "Bellibolt ex da Kissera"
	},


	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	rarity: "Promo",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Iono's Tadbulb",
		'fr-fr': "Têtampoule de Mashynn",
		'es-es': "Tadbulb de e-Nigma",
		'de-de': "Enigmaras Blipp",
		'it-it': "Tadbulb di Kissara",
		'pt-br': "Tadbulb da Kissera",
		'es-mx': "Tadbulb de e-Nigma"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Electric Streamer",
			'fr-fr': "Stream Électrique",
			'de-de': "Elektro-Streaming",
			'es-es': "Streamer Electrizante",
			'it-it': "Streamer Elettrizzante",
			'pt-br': "Transmissão Elétrica"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may attach a Basic {L} Energy card from your hand to 1 of your Iono's Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {L} de base de votre main à l'un de vos Pokémon de Mashynn.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Basis-{L}-Energiekarte aus deiner Hand an 1 deiner Enigmaras Pokémon anlegen.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {L} Básica de tu mano a uno de tus Pokémon de e-Nigma.",
			'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon di Kissara una carta Energia base {L} dalla tua mano tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar uma carta de Energia {L} Básica da sua mão a 1 dos seus Pokémon da Kissera."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Thunderous Bolt",
			'fr-fr': "Éclair du Tonnerre",
			'de-de': "Donnernder Einschlag",
			'es-es': "Rayo Atronador",
			'it-it': "Fulmine Tonante",
			'pt-br': "Raio Estrondoso"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 230
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 819266,
				tcgplayer: 628320
			},
		}
	],
}

export default card
