import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [982],
	set: Set,

	name: {
		'fr-fr': "Deusolourdo",
		'en-us': "Dudunsparce",
		'es-es': "Dudunsparce",
		'it-it': "Dudunsparce",
		'pt-br': "Dudunsparce",
		'de-de': "Dummimisel"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Insolourdo",
		'en-us': "Dunsparce",
		'es-es': "Dunsparce",
		'it-it': "Dunsparce",
		'pt-br': "Dunsparce",
		'de-de': "Dummisel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Coud'Boue",
			'en-us': "Mud-Slap",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'pt-br': "Tapa de Lama",
			'de-de': "Lehmschelle"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Creuse Flash",
			'en-us': "Dig Away Flash",
			'es-es': "Destello Excavación",
			'it-it': "Scava Tana Flash",
			'pt-br': "Cavada Atordoante",
			'de-de': "Buddelblitz"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Paralysé. Mélangez avec votre deck ce Pokémon et toutes les cartes qui lui sont attachées.",
			'en-us': "Your opponent's Active Pokémon is now Paralyzed. Shuffle this Pokémon and all attached cards into your deck.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Paralizado. Pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			'it-it': "Il Pokémon attivo del tuo avversario viene paralizzato. Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Paralisado. Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt paralysiert. Mische dieses Pokémon und alle angelegten Karten in dein Deck."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715704,
				tcgplayer: 497633,
				cardtrader: 248881
			}
		},
	],

	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "This Pokémon uses its hard tail to make its nest by boring holes into bedrock deep underground. The nest can reach lengths of over six miles.",
	},
}

export default card
