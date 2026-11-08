import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Pachirisu",
		'fr-fr': "Pachirisu",
		'es-es': "Pachirisu",
		'it-it': "Pachirisu",
		'pt-br': "Pachirisu",
		'de-de': "Pachirisu"
	},

	illustrator: "OOYAMA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		417,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Snuggly Generator",
				'fr-fr': "Générateur Douillet",
				'es-es': "Generador Acurrucante",
				'it-it': "Generatore di Coccole",
				'pt-br': "Gerador Aconchegante",
				'de-de': "Schmusegenerator"
			},
			effect: {
				'en-us': "For each of your Benched Pokémon that has the Nuzzle attack, search your deck for a Lightning Energy card and attach it to that Pokémon. Then, shuffle your deck.",
				'fr-fr': "Pour chacun de vos Pokémon de Banc ayant l’attaque Frotte-Frimousse, cherchez une carte Énergie Lightning dans votre deck et attachez-la au Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Por cada uno de tus Pokémon en Banca que tenga el ataque Moflete Estático, busca en tu baraja 1 carta de Energía Lightning y únela a ese Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Energia Lightning per ogni Pokémon nella tua panchina che abbia l’attacco Elettrococcola e assegnala a quel Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Para cada um dos seus Pokémon no Banco que tiver o ataque Chamego, procure por 1 carta de Energia Lightning no seu baralho e ligue-a àquele Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche für jedes Pokémon auf deiner Bank, das die Attacke Wangenrubbler hat, dein Deck nach 1 Lightning-Energiekarte und lege sie an jenes Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Nuzzle",
				'fr-fr': "Frotte-Frimousse",
				'es-es': "Moflete Estático",
				'it-it': "Elettrococcola",
				'pt-br': "Chamego",
				'de-de': "Wangenrubbler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.",
	},

	thirdParty: {
		cardmarket: 315979,
		tcgplayer: 157666
	}
}

export default card
