import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		es: "Mr. Mime",
		de: "Pantimos",
		it: "Mr. Mime",
		pt: "Mr. Mime",
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
			en: "Mimic",
			fr: "Copie",
			es: "Mimético",
			de: "Mimikry",
			it: "Mimica",
			pt: "Mímica",
			'es-mx': "Mímica"
		},

		effect: {
			en: "Shuffle your hand into your deck. Then, draw a card for each card in your opponent's hand.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
			es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada carta en la mano de tu rival.",
			de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jede Karte auf der Hand deines Gegners.",
			it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni carta nella mano del tuo avversario.",
			pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre uma carta para cada carta na mão do seu oponente.",
			'es-mx': "Pon las cartas de tu mano en tu mazo y barájalas todas. Después, roba 1 carta por cada carta en la mano de tu rival."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Psy Bolt",
			fr: "Choc Mental",
			es: "Rayo Psi",
			de: "Mentale Blockade",
			it: "Psico",
			pt: "Raio Psíquico",
			'es-mx': "Psicotrueno"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
