import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [960],
	set: Set,

	name: {
		'en-us': "Wiglett",
		'fr-fr': "Taupikeau",
		'es-es': "Wiglett",
		'it-it': "Wiglett",
		'pt-br': "Wiglett",
		'de-de': "Schligda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Dig a Little",
			'fr-fr': "Creusement Léger",
			'es-es': "Excavar un Poquito",
			'it-it': "Scava in Cima",
			'pt-br': "Cavadinha",
			'de-de': "Kleiner Schaufler"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard the top card of your opponent's deck.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta la primera carta de la baraja de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Tika Matsuno",

	description: {
		'en-us': "This Pokémon can pick up the scent of a Veluza just over 65 feet away and will hide itself in the sand.",
	},

	thirdParty: {
        cardmarket: 702351,
        tcgplayer: 487905
    }
}

export default card