import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [901],
	set: Set,

	name: {
		'en-us': "Bloodmoon Ursaluna ex",
		'fr-fr': "Ursaking Lune Vermeille-ex",
		'es-es': "Ursaluna Luna Carmesí ex",
		'it-it': "Ursaluna Luna Cremisi-ex",
		'pt-br': "Ursaluna Lua Sangrenta ex",
		'de-de': "Blutmond-Ursaluna-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Seasoned Skill",
			'fr-fr': "Compétence Maîtrisée",
			'es-es': "Habilidad Demostrada",
			'it-it': "Talento Esperto",
			'pt-br': "Talento Inato",
			'de-de': "Routiniertes Geschick"
		},

		effect: {
			'en-us': "Blood Moon used by this Pokémon costs {C} less for each Prize card your opponent has taken.",
			'fr-fr': "Lune Rouge utilisée par ce Pokémon coûte {C} de moins pour chaque carte Récompense que votre adversaire a récupérée.",
			'es-es': "El ataque Luna Roja usado por este Pokémon cuesta {C} menos por cada carta de Premio que haya cogido tu rival.",
			'it-it': "Il costo dell'attacco Luna Rossa usato da questo Pokémon è ridotto di {C} per ogni carta Premio presa dal tuo avversario.",
			'pt-br': "O ataque Luar de Sangue usado por este Pokémon custa {C} a menos para cada carta de Prêmio que seu oponente pegou.",
			'de-de': "Die Kosten der von diesem Pokémon eingesetzten Attacke Blutmond verringern sich für jede von deinem Gegner genommene Preiskarte um {C}."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Blood Moon",
			'fr-fr': "Lune Rouge",
			'es-es': "Luna Roja",
			'it-it': "Luna Rossa",
			'pt-br': "Luar de Sangue",
			'de-de': "Blutmond"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 240
	}],

	retreat: 3,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "aky CG Works",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 796948,
				tcgplayer: 595473
			},
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 800150,
				tcgplayer: 595474
			}
		}
	],
}

export default card
