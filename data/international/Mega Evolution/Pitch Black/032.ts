import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'es-es': "Jynx",
		'es-mx': "Jynx",
		'de-de': "Rossana",
		'it-it': "Jynx",
		'pt-br': "Jynx"
	},

	illustrator: "Yoshimoto Yoshimon",
	rarity: "Common",
	category: "Pokemon",
	dexId: [124],
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Intense Kiss",
			'fr-fr': "Bisou Intense",
			'es-es': "Beso Intenso",
			'es-mx': "Beso Intenso",
			'de-de': "Inniger Kuss",
			'it-it': "Bacio Intenso",
			'pt-br': "Beijão"
		},

		cost: ["Psychic"],

		effect: {
			'en-us': "At the end of your opponent's next turn, discard the Defending Pokémon and all attached cards.",
			'fr-fr': "À la fin du prochain tour de votre adversaire, défaussez le Pokémon Défenseur et toutes les cartes qui lui sont attachées.",
			'es-es': "Al final del próximo turno de tu rival, descarta el Pokémon Defensor y todas las cartas unidas a él.",
			'es-mx': "Al final del próximo turno de tu rival, descarta el Pokémon Defensor y todas las cartas unidas a él.",
			'de-de': "Lege am Ende des nächsten Zuges deines Gegners das Verteidigende Pokémon und alle angelegten Karten auf seinen Ablagestapel.",
			'it-it': "Alla fine del prossimo turno del tuo avversario, scarta il Pokémon difensore e tutte le carte a esso assegnate.",
			'pt-br': "No final do próximo turno do seu oponente, descarte o Pokémon Defensor e todas as cartas ligadas a ele."
		}
	}, {
		name: {
			'en-us': "Psy Bolt",
			'fr-fr': "Choc Mental",
			'es-es': "Rayo Psi",
			'es-mx': "Psicotrueno",
			'de-de': "Mentale Blockade",
			'it-it': "Psico",
			'pt-br': "Raio Psíquico"
		},

		cost: ["Psychic", "Colorless"],

		damage: 50,

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895819,
				tcgplayer: 704789
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895819,
				tcgplayer: 704789
			}
		},
	],
}

export default card
