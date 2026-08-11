import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [727],
	set: Set,

	name: {
		'en-us': "Incineroar ex",
		'fr-fr': "Félinferno-ex",
		'es-es': "Incineroar ex",
		'it-it': "Incineroar-ex",
		'pt-br': "Incineroar ex",
		'de-de': "Fuegro-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Torracat",
		'fr-fr': "Matoufeu",
		'es-es': "Torracat",
		'it-it': "Torracat",
		'pt-br': "Torracat",
		'de-de': "Miezunder"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Hustle Play",
			'fr-fr': "Jeu Pressé",
			'es-es': "Juego Apremiante",
			'it-it': "Energiocata",
			'pt-br': "Cair pra Dentro",
			'de-de': "Ins Zeug legen"
		},

		effect: {
			'en-us': "Attacks used by this Pokémon cost {C} less for each of your opponent's Benched Pokémon.",
			'fr-fr': "Les attaques utilisées par ce Pokémon coûtent {C} de moins pour chacun des Pokémon de Banc de votre adversaire.",
			'es-es': "Los ataques usados por este Pokémon cuestan {C} menos por cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Il costo degli attacchi usati da questo Pokémon è ridotto di {C} per ogni Pokémon nella panchina del tuo avversario.",
			'pt-br': "Os ataques usados por este Pokémon custam {C} a menos para cada Pokémon no Banco do seu oponente.",
			'de-de': "Die Kosten der von diesem Pokémon eingesetzten Attacken verringern sich für jedes Pokémon auf der Bank deines Gegners um {C}."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Blaze Blast",
			'fr-fr': "Explosion Flamboyante",
			'es-es': "Explosión Llameante",
			'it-it': "Fiammata Esplosiva",
			'pt-br': "Incêndio Explosivo",
			'de-de': "Brandausbruch"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 240
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760817,
				tcgplayer: 542908
			}
		},
	],

	suffix: "ex",
	illustrator: "N-DESIGN Inc.",

}

export default card