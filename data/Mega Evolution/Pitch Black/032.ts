import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Jynx",
		fr: "Lippoutou",
		es: "Jynx",
		'es-mx': "Jynx",
		de: "Rossana",
		it: "Jynx",
		pt: "Jynx"
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
			en: "Intense Kiss",
			fr: "Bisou Intense",
			es: "Beso Intenso",
			'es-mx': "Beso Intenso",
			de: "Inniger Kuss",
			it: "Bacio Intenso",
			pt: "Beijão"
		},

		cost: ["Psychic"],

		effect: {
			en: "At the end of your opponent's next turn, discard the Defending Pokémon and all attached cards.",
			fr: "À la fin du prochain tour de votre adversaire, défaussez le Pokémon Défenseur et toutes les cartes qui lui sont attachées.",
			es: "Al final del próximo turno de tu rival, descarta el Pokémon Defensor y todas las cartas unidas a él.",
			'es-mx': "Al final del próximo turno de tu rival, descarta el Pokémon Defensor y todas las cartas unidas a él.",
			de: "Lege am Ende des nächsten Zuges deines Gegners das Verteidigende Pokémon und alle angelegten Karten auf seinen Ablagestapel.",
			it: "Alla fine del prossimo turno del tuo avversario, scarta il Pokémon difensore e tutte le carte a esso assegnate.",
			pt: "No final do próximo turno do seu oponente, descarte o Pokémon Defensor e todas as cartas ligadas a ele."
		}
	}, {
		name: {
			en: "Psy Bolt",
			fr: "Choc Mental",
			es: "Rayo Psi",
			'es-mx': "Psicotrueno",
			de: "Mentale Blockade",
			it: "Psico",
			pt: "Raio Psíquico"
		},

		cost: ["Psychic", "Colorless"],

		damage: 50,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
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
