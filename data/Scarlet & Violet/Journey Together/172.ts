import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Iono's Bellibolt ex",
		fr: "Ampibidou-ex de Mashynn",
		es: "Bellibolt ex de e-Nigma",
		de: "Enigmaras Wampitz-ex",
		it: "Bellibolt-ex di Kissara",
		pt: "Bellibolt ex da Kissera",
		'es-mx': "Bellibolt ex de e-Nigma"
	},

	rarity: "Ultra Rare",
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
			de: "Elektro-Streaming",
			it: "Streamer Elettrizzante",
			pt: "Transmissão Elétrica",
			'es-mx': "Streamer Electrizante"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Basic Lightning Energy card from your hand to 1 of your Iono's Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Lightning de base de votre main à l'un de vos Pokémon de Mashynn.",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Lightning Básica de tu mano a uno de tus Pokémon de e-Nigma.",
			de: "Beliebig oft während deines Zuges kannst du 1 Basis-Lightning-Energiekarte aus deiner Hand an 1 deiner Enigmaras Pokémon anlegen.",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon di Kissara una carta Energia base Lightning dalla tua mano tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá ligar uma carta de Energia Lightning Básica da sua mão a 1 dos seus Pokémon da Kissera.",
			'es-mx': "Cuantas veces quieras durante tu turno, puedes unir 1 carta de Energía Lightning Básica de tu mano a 1 de tus Pokémon de e-Nigma."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunderous Bolt",
			fr: "Éclair du Tonnerre",
			es: "Rayo Atronador",
			de: "Donnernder Einschlag",
			it: "Fulmine Tonante",
			pt: "Raio Estrondoso",
			'es-mx': "Rayo Atronador"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar."
		},

		damage: 230
	}],

	retreat: 2,
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
