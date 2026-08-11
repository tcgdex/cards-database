import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Florges",
		'fr-fr': "Florges",
		'es-es': "Florges",
		'it-it': "Florges",
		'pt-br': "Florges",
		'de-de': "Florges"
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
			'en-us': "Rapid Strike Connection",
			'fr-fr': "Connexion Mille Poings",
			'es-es': "Conexión Golpe Fluido",
			'it-it': "Connessione Colpo Rapido",
			'pt-br': "Rapid Strike Connection",
			'de-de': "Fließender-Angriff-Verbindung"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may move an Energy from 1 of your Pokémon to 1 of your Rapid Strike Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie de l'un de vos Pokémon vers l'un de vos Pokémon Mille Poings.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes mover 1 Energía de 1 de tus Pokémon a 1 de tus Pokémon Golpe Fluido.",
			'it-it': "Durante il tuo turno, puoi spostare un'Energia da uno dei tuoi Pokémon a uno dei tuoi Pokémon Colpo Rapido tutte le volte che vuoi.",
			'pt-br': "As often as you like during your turn, you may move an Energy from 1 of your Pokémon to 1 of your Rapid Strike Pokémon.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Energie von 1 deiner Pokémon auf 1 deiner Fließender-Angriff-Pokémon verschieben."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Wonder Shine",
			'fr-fr': "Éclat Merveilleux",
			'es-es': "Brillo Prodigioso",
			'it-it': "Luce Meraviglia",
			'pt-br': "Wonder Shine",
			'de-de': "Wunderglanz"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "Your opponent's Active Pokémon is now Confused.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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
		'en-us': "Floette",
		'fr-fr': "Floette",
		'es-es': "Floette",
		'it-it': "Floette",
		'pt-br': "Floette",
		'de-de': "Floette"
	},

	description: {
		'en-us': "Its life can span several hundred years. It's said to devote its entire life to protecting gardens."
	},

	dexId: [671],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574121,
				tcgplayer: 246855
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574121,
				tcgplayer: 246855
			}
		},
	],
}

export default card
