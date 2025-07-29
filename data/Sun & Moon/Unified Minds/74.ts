import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		es: "Exeggutor",
		it: "Exeggutor",
		pt: "Exeggutor",
		de: "Kokowei"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mind Bend",
				fr: "Contrôleur d’Esprit",
				es: "Fusión Mental",
				it: "Fusione Mentale",
				pt: "Dobra Mentes",
				de: "Gedankenverbiegung"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Full Clean",
				fr: "Nettoyage Complet",
				es: "Limpieza Total",
				it: "Grandi Pulizie",
				pt: "Limpeza Completa",
				de: "Frühjahrsputz"
			},
			effect: {
				en: "Discard your hand.",
				fr: "Défaussez votre main.",
				es: "Descarta las cartas de tu mano.",
				it: "Scarta le carte che hai in mano.",
				pt: "Descarte a sua mão.",
				de: "Lege deine Handkarten auf deinen Ablagestapel."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 388182
	}
}

export default card
