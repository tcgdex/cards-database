import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [939],
	set: Set,

	name: {
		en: "Iono's Bellibolt ex",
		fr: "Ampibidou-ex de Mashynn",
		de: "Enigmaras Wampitz-ex",
		es: "Bellibolt ex de e-Nigma",
		it: "Bellibolt-ex di Kissara",
		pt: "Bellibolt ex da Kissera"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	evolveFrom: {
		en: "Iono's Tadbulb",
		fr: "Têtampoule de Mashynn",
		es: "Tadbulb de e-Nigma",
		de: "Enigmaras Blipp",
		it: "Tadbulb di Kissara",
		pt: "Tadbulb da Kissera",
		'es-mx': "Tadbulb de e-Nigma"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Electric Streamer",
			fr: "Stream Électrique",
			de: "Elektro-Streaming",
			es: "Streamer Electrizante",
			it: "Streamer Elettrizzante",
			pt: "Transmissão Elétrica"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Basic {L} Energy card from your hand to 1 of your Iono's Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {L} de base de votre main à l'un de vos Pokémon de Mashynn.",
			de: "Beliebig oft während deines Zuges kannst du 1 Basis-{L}-Energiekarte aus deiner Hand an 1 deiner Enigmaras Pokémon anlegen.",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {L} Básica de tu mano a uno de tus Pokémon de e-Nigma.",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon di Kissara una carta Energia base {L} dalla tua mano tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá ligar uma carta de Energia {L} Básica da sua mão a 1 dos seus Pokémon da Kissera."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunderous Bolt",
			fr: "Éclair du Tonnerre",
			de: "Donnernder Einschlag",
			es: "Rayo Atronador",
			it: "Fulmine Tonante",
			pt: "Raio Estrondoso"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 230
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card