import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Florges",
		fr: "Florges",
		es: "Florges",
		it: "Florges",
		pt: "Florges",
		de: "Florges"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage2",
	illustrator: "Kagemaru Himeno",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rapid Strike Connection",
			fr: "Connexion Mille Poings",
			es: "Conexión Golpe Fluido",
			it: "Connessione Colpo Rapido",
			pt: "Rapid Strike Connection",
			de: "Fließender-Angriff-Verbindung"
		},

		effect: {
			en: "As often as you like during your turn, you may move an Energy from 1 of your Pokémon to 1 of your Rapid Strike Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie de l'un de vos Pokémon vers l'un de vos Pokémon Mille Poings.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 Energía de 1 de tus Pokémon a 1 de tus Pokémon Golpe Fluido.",
			it: "Durante il tuo turno, puoi spostare un'Energia da uno dei tuoi Pokémon a uno dei tuoi Pokémon Colpo Rapido tutte le volte che vuoi.",
			pt: "As often as you like during your turn, you may move an Energy from 1 of your Pokémon to 1 of your Rapid Strike Pokémon.",
			de: "Beliebig oft während deines Zuges kannst du 1 Energie von 1 deiner Pokémon auf 1 deiner Fließender-Angriff-Pokémon verschieben."
		}
	}],

	attacks: [{
		name: {
			en: "Wonder Shine",
			fr: "Éclat Merveilleux",
			es: "Brillo Prodigioso",
			it: "Luce Meraviglia",
			pt: "Wonder Shine",
			de: "Wunderglanz"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Your opponent's Active Pokémon is now Confused.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 110,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		en: "Floette",
		fr: "Floette",
		es: "Floette",
		it: "Floette",
		pt: "Floette",
		de: "Floette"
	},

	description: {
		en: "Its life can span several hundred years. It's said to devote its entire life to protecting gardens."
	},

	dexId: [671],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574121
	}
}

export default card
