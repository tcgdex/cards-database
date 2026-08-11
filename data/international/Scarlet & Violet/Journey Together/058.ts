import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [122],
	set: Set,

	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
		'es-es': "Mr. Mime",
		'de-de': "Pantimos",
		'it-it': "Mr. Mime",
		'pt-br': "Mr. Mime",
		'es-mx': "Mr. Mime"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Mimic",
			'fr-fr': "Copie",
			'es-es': "Mimético",
			'de-de': "Mimikry",
			'it-it': "Mimica",
			'pt-br': "Mímica",
			'es-mx': "Mímica"
		},

		effect: {
			'en-us': "Shuffle your hand into your deck. Then, draw a card for each card in your opponent's hand.",
			'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
			'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada carta en la mano de tu rival.",
			'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jede Karte auf der Hand deines Gegners.",
			'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni carta nella mano del tuo avversario.",
			'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre uma carta para cada carta na mão do seu oponente.",
			'es-mx': "Pon las cartas de tu mano en tu mazo y barájalas todas. Después, roba 1 carta por cada carta en la mano de tu rival."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Psy Bolt",
			'fr-fr': "Choc Mental",
			'es-es': "Rayo Psi",
			'de-de': "Mentale Blockade",
			'it-it': "Psico",
			'pt-br': "Raio Psíquico",
			'es-mx': "Psicotrueno"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Darkness",
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
	regulationMark: "I",
	illustrator: "GOTO minori",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817210,
				tcgplayer: 623485
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817210,
				tcgplayer: 623485
			}
		},
	],
}

export default card
