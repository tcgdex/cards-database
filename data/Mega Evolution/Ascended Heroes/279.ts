import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Iono's Bellibolt ex",
		fr: "Ampibidou-ex de Mashynn",
		es: "Bellibolt ex de e-Nigma",
		'es-mx': "Bellibolt ex de e-Nigma",
		de: "Enigmaras Wampitz-ex",
		it: "Bellibolt-ex di Kissara",
		pt: "Bellibolt ex da Kissera"
	},

	illustrator: "Akira Komayama",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Electric Streamer",
			fr: "Stream Électrique",
			es: "Streamer Electrizante",
			'es-mx': "Streamer Electrizante",
			de: "Elektro-Streaming",
			it: "Streamer Elettrizzante",
			pt: "Transmissão Elétrica"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Basic {L} Energy card from your hand to 1 of your Iono's Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {L} de base de votre main à l'un de vos Pokémon de Mashynn.",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {L} Básica de tu mano a uno de tus Pokémon de e-Nigma.",
			'es-mx': "Cuantas veces quieras durante tu turno, puedes unir 1 carta de Energía {L} Básica de tu mano a 1 de tus Pokémon de e-Nigma.",
			de: "Beliebig oft während deines Zuges kannst du 1 Basis-{L}-Energiekarte aus deiner Hand an 1 deiner Enigmaras Pokémon anlegen.",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon di Kissara una carta Energia base {L} dalla tua mano tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá ligar uma carta de Energia {L} Básica da sua mão a 1 dos seus Pokémon da Kissera."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunderous Bolt",
			fr: "Éclair du Tonnerre",
			es: "Rayo Atronador",
			'es-mx': "Rayo Atronador",
			de: "Donnernder Einschlag",
			it: "Fulmine Tonante",
			pt: "Raio Estrondoso"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 230
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 676091,
		cardmarket: 869890
	}
}

export default card
