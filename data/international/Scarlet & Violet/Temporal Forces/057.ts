import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		'en-us': "Zeraora",
		'fr-fr': "Zeraora",
		'es-es': "Zeraora",
		'it-it': "Zeraora",
		'pt-br': "Zeraora",
		'de-de': "Zeraora"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Shocking Knuckle",
			'fr-fr': "Poing Choquant",
			'es-es': "Nudillo Electrizante",
			'it-it': "Pugno Fulminante",
			'pt-br': "Punho Chocante",
			'de-de': "Schockfaust"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Strong Volt",
			'fr-fr': "Décharge Foudroyante",
			'es-es': "Descarga Fulminante",
			'it-it': "Supervolt",
			'pt-br': "Tensão Intensa",
			'de-de': "Voltkraft"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It runs as fast as lightning strikes, shredding its opponents with its high-voltage claws.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760687,
				tcgplayer: 542801
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760687,
				tcgplayer: 542801
			}
		},
	],

	illustrator: "kantaro",

}

export default card