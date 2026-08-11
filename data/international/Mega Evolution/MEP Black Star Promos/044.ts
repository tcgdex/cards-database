import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou",
		'de-de': "Flamiau",
		'it-it': "Litten",
		'es-es': "Litten",
		'pt-br': "Litten",
		'es-mx': "Litten"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [725],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Fire Fang",
			'fr-fr': "Crocs Feu",
			'de-de': "Feuerzahn",
			'it-it': "Rogodenti",
			'es-es': "Colmillo Ígneo",
			'pt-br': "Presas de Fogo",
			'es-mx': "Colmillo Ígneo"
		},

		damage: 20,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		}
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 875193,
				tcgplayer: 684468
			}
		},
	],
}

export default card
