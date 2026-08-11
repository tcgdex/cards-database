import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

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
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Inviting Kiss",
			'fr-fr': "Bisou Tentant",
			'es-es': "Beso Tentador",
			'it-it': "Bacio Invitante",
			'pt-br': "Beija-me",
			'de-de': "Einladender Kuss"
		},

		effect: {
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck. If you put any Pokémon onto your Bench in this way, move an Energy from this Pokémon to the new Benched Pokémon.",
			'fr-fr': "Cherchez un Pokémon de base dans votre deck, puis placez-le sur votre Banc. Mélangez ensuite votre deck. Si vous avez placé un Pokémon sur votre Banc de cette façon, déplacez une Énergie de ce Pokémon vers le nouveau Pokémon de Banc.",
			'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja. Si pones algún Pokémon en tu Banca de esta manera, mueve 1 Energía de este Pokémon al nuevo Pokémon en Banca.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo. Se hai messo un Pokémon nella tua panchina in questo modo, sposta un'Energia da questo Pokémon al nuovo Pokémon in panchina.",
			'pt-br': "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho. Se você colocou qualquer Pokémon no seu Banco desta forma, mova uma Energia deste Pokémon para o novo Pokémon no Banco.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck. Wenn du auf diese Weise mindestens 1 Pokémon auf deine Bank gelegt hast, verschiebe 1 Energie von diesem Pokémon auf das neue Pokémon auf deiner Bank."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Icy Snow",
			'fr-fr': "Verglas",
			'es-es': "Nieve Helada",
			'it-it': "Geloneve",
			'pt-br': "Neve Congelada",
			'de-de': "Eisiger Schnee"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "In certain parts of Galar, Jynx was once feared and worshiped as the Queen of Ice.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769220,
				tcgplayer: 550090
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769220,
				tcgplayer: 550090
			}
		},
	],

	illustrator: "Gapao",

}

export default card