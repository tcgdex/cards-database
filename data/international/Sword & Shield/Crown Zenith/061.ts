import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [203],
	set: Set,

	name: {
		'en-us': "Girafarig",
		'fr-fr': "Girafarig",
		'es-es': "Girafarig",
		'it-it': "Girafarig",
		'pt-br': "Girafarig",
		'de-de': "Girafarig"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Double Draw",
			'fr-fr': "Double Pioche",
			'es-es': "Roba Doble",
			'it-it': "Pescata Doppia",
			'pt-br': "Compra Dupla",
			'de-de': "Zweifachzug"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Psybeam",
			'fr-fr': "Rafale Psy",
			'es-es': "Psicorrayo",
			'it-it': "Psicoraggio",
			'pt-br': "Feixe Psíquico",
			'de-de': "Psystrahl"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
	}],

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
	regulationMark: "F",


	description: {
		'en-us': "Its tail has a small brain of its own. Beware! If you get close, it may react to your scent by biting.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691778,
				tcgplayer: 478177
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691778,
				tcgplayer: 478177
			}
		},
	],
}

export default card
