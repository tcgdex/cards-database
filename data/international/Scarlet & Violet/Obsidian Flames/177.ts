import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [735],
	set: Set,

	name: {
		'fr-fr': "Argouste",
		'en-us': "Gumshoos",
		'es-es': "Gumshoos",
		'it-it': "Gumshoos",
		'pt-br': "Gumshoos",
		'de-de': "Manguspektor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Manglouton",
		'en-us': "Yungoos",
		'es-es': "Yungoos",
		'it-it': "Yungoos",
		'pt-br': "Yungoos",
		'de-de': "Mangunior"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Frappe de Tête",
			'en-us': "Headbang",
			'es-es': "Cabecear",
			'it-it': "Scuotitesta",
			'pt-br': "Baque de Cabeça",
			'de-de': "Headbangen"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Mâchouille",
			'en-us': "Crunch",
			'es-es': "Triturar",
			'it-it': "Sgranocchio",
			'pt-br': "Mastigada",
			'de-de': "Knirscher"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Once it finds signs of prey, it will patiently stake out the location, waiting until the sun goes down.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725257,
				tcgplayer: 509730,
				cardtrader: 256073
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725257,
				tcgplayer: 509730,
				cardtrader: 256073
			}
		},
	],

	illustrator: "Eri Yamaki",

	
}

export default card
