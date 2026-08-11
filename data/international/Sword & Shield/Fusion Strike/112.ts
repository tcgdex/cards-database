import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [124],
	set: Set,

	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'es-es': "Jynx",
		'it-it': "Jynx",
		'pt-br': "Jynx",
		'de-de': "Rossana"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		'en-us': "Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Double Draw",
			'fr-fr': "Double Pioche",
			'de-de': "Zweifachzug",
			'es-es': "Roba Doble",
			'pt-br': "Compra Dupla",
			'it-it': "Pescata Doppia"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'de-de': "Ziehe 2 Karten.",
			'es-es': "Roba 2 cartas.",
			'pt-br': "Compre 2 cartas.",
			'it-it': "Pesca due carte."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Dazzle Dance",
			'fr-fr': "Danse Éblouissante",
			'de-de': "Verwirrender Tanz",
			'es-es': "Danza Deslumbrante",
			'pt-br': "Dança Fascinante",
			'it-it': "Accecadanza"
		},

		damage: 30,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582604,
				tcgplayer: 253273
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582604,
				tcgplayer: 253273
			}
		},
	],
}

export default card
