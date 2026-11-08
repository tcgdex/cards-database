import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [617],
	set: Set,

	name: {
		'en-us': "Accelgor",
		'fr-fr': "Limaspeed",
		'de-de': "Hydragil",
		'it-it': "Accelgor",
		'pt-br': "Accelgor",
		'es-es': "Accelgor",
		'es-mx': "Accelgor"
	},

	illustrator: "Taiga Kasai",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Shelmet",
		'fr-fr': "Escargaume",
		'de-de': "Schnuthelm",
		'it-it': "Shelmet",
		'pt-br': "Shelmet",
		'es-es': "Shelmet",
		'es-mx': "Shelmet"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Acid Spray",
			'fr-fr': "Bombe Acide",
			'de-de': "Säurespeier",
			'it-it': "Acidobomba",
			'pt-br': "Spray Ácido",
			'es-es': "Bomba Ácida",
			'es-mx': "Bomba Ácida"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'es-mx': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836081,
				tcgplayer: 642209
			}
		},
	],
}

export default card
