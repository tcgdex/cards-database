import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [543],
	set: Set,

	name: {
		'en-us': "Venipede",
		'fr-fr': "Venipatte",
		'es-es': "Venipede",
		'it-it': "Venipede",
		'pt-br': "Venipede",
		'de-de': "Toxiped"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Spit Poison",
			'fr-fr': "Crache-Venin",
			'es-es': "Escupir Veneno",
			'it-it': "Sputaveleno",
			'pt-br': "Cuspe Venenoso",
			'de-de': "Giftspucke"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "Venipede and Sizzlipede are similar species, but when the two meet, a huge fight ensues.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769289,
				tcgplayer: 550159
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769289,
				tcgplayer: 550159
			}
		},
	],

	illustrator: "Tomokazu Komiya",

}

export default card