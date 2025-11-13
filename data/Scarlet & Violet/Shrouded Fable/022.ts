import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		en: "Sylveon",
		fr: "Nymphali",
		es: "Sylveon",
		it: "Sylveon",
		pt: "Sylveon",
		de: "Feelinara"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Mystical Return",
			fr: "Retour Mystique",
			es: "Retorno Místico",
			it: "Ritorno Mistico",
			pt: "Retorno Místico",
			de: "Mystische Rückkehr"
		},

		effect: {
			en: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon. Shuffle that Pokémon and all attached cards into their deck.",
			fr: "Lancez une pièce. Si c'est face, choisissez l'un des Pokémon de Banc de votre adversaire. Mélangez avec son deck ce Pokémon-là et toutes les cartes qui lui sont attachées.",
			es: "Lanza 1 moneda. Si sale cara, elige 1 de los Pokémon en Banca de tu rival. Pon ese Pokémon y todas las cartas unidas a él en su baraja y barájalas todas.",
			it: "Lancia una moneta. Se esce testa, scegli uno dei Pokémon nella panchina del tuo avversario. Rimischia quel Pokémon e tutte le carte a esso assegnate nel suo mazzo.",
			pt: "Jogue uma moeda. Se sair cara, escolha 1 dos Pokémon no Banco do seu oponente. Embaralhe aquele Pokémon e todas as cartas ligadas a ele no baralho dele.",
			de: "Wirf 1 Münze. Wähle bei Kopf 1 Pokémon auf der Bank deines Gegners. Mische jenes Pokémon und alle angelegten Karten in sein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Disarming Voice",
			fr: "Voix Enjôleuse",
			es: "Voz Cautivadora",
			it: "Incantavoce",
			pt: "Voz Desarmante",
			de: "Säuselstimme"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Kuroimori",

	thirdParty: {
		cardmarket: 780917
	}
}

export default card
