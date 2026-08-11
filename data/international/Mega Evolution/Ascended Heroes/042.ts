import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil",
		'es-es': "Croconaw",
		'es-mx': "Croconaw",
		'de-de': "Tyracroc",
		'it-it': "Croconaw",
		'pt-br': "Croconaw"
	},

	evolveFrom: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
		'es-es': "Totodile",
		'es-mx': "Totodile",
		'de-de': "Karnimani",
		'it-it': "Totodile",
		'pt-br': "Totodile",
	},

	illustrator: "Felicia Chen",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [159],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Crunch",
			'fr-fr': "Mâchouille",
			'es-es': "Triturar",
			'es-mx': "Triturar",
			'de-de': "Knirscher",
			'it-it': "Sgranocchio",
			'pt-br': "Mastigada"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'es-mx': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	description: {
		'en-us': "If it loses a fang, a new one grows back in its place. There are always 48 fangs lining its mouth.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869653,
			tcgplayer: 675854
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870206,
			tcgplayer: 676887
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870205,
			tcgplayer: 677027
		}
	},
],
}

export default card
