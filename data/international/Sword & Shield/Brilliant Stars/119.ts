import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [398],
	set: Set,

	name: {
		'en-us': "Staraptor",
		'fr-fr': "Étouraptor",
		'es-es': "Staraptor",
		'it-it': "Staraptor",
		'pt-br': "Staraptor",
		'de-de': "Staraptor"
	},

	illustrator: "Narumi Sato",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Staravia",
		'fr-fr': "Étourvol",
		'es-es': "Staravia",
		'it-it': "Staravia",
		'pt-br': "Staravia",
		'de-de': "Staravia"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Strong Breeze",
			'fr-fr': "Forte Brise",
			'es-es': "Fuerte Brisa",
			'it-it': "Fortebrezza",
			'pt-br': "Brisa Intensa",
			'de-de': "Steife Brise"
		},

		effect: {
			'en-us': "Your opponent shuffles their Active Pokémon and all attached cards into their deck.",
			'fr-fr': "Votre adversaire mélange avec son deck son Pokémon Actif et toutes les cartes attachées.",
			'es-es': "Tu rival pone su Pokémon Activo y todas las cartas unidas a él en su baraja, y baraja todas las cartas.",
			'it-it': "Il tuo avversario rimischia il suo Pokémon attivo e tutte le carte a esso assegnate nel suo mazzo.",
			'pt-br': "Seu oponente embaralha o Pokémon Ativo dele(a) e todas as cartas ligadas a ele no próprio baralho.",
			'de-de': "Dein Gegner mischt sein Aktives Pokémon und alle angelegten Karten in sein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Spinning Bird",
			'fr-fr': "Oiseau Torpille",
			'es-es': "Pájaro Giratorio",
			'it-it': "Giravolatile",
			'pt-br': "Ave Giratória",
			'de-de': "Vogelwirbel"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Lightning",
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
		'en-us': "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608665,
				tcgplayer: 263844
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608665,
				tcgplayer: 263844
			}
		},
	],
}

export default card
