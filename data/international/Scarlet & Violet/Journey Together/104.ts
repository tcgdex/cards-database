import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [600],
	set: Set,

	name: {
		'en-us': "N's Klang",
		'fr-fr': "Clic de N",
		'es-es': "Klang de N",
		'de-de': "Ns Kliklak",
		'it-it': "Klang di N",
		'pt-br': "Klang do N",
		'es-mx': "Klang de N"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "N's Klink",
		'fr-fr': "Tic de N",
		'es-es': "Klink de N",
		'de-de': "Ns Klikk",
		'it-it': "Klink di N",
		'pt-br': "Klink do N",
		'es-mx': "Klink de N"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spinning Gears",
			'fr-fr': "Engrenages Tournoyants",
			'es-es': "Engranajes Giratorios",
			'de-de': "Durchdrehendes Getriebe",
			'it-it': "Ingranaggi Rotanti",
			'pt-br': "Engrenagem Giratória",
			'es-mx': "Engranajes Giratorios"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Confront",
			'fr-fr': "Confrontation",
			'es-es': "Confrontar",
			'de-de': "Konfrontieren",
			'it-it': "Confronto",
			'pt-br': "Confrontar",
			'es-mx': "Confrontar"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "I",
	illustrator: "KEIICHIRO ITO",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817256,
				tcgplayer: 623531
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817256,
				tcgplayer: 623531
			}
		},
	],
}

export default card
