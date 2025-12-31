import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		en: "Sylveon",
		pt: "Sylveon",
		fr: "Nymphali",
		de: "Feelinara",
		es: "Sylveon",
		it: "Sylveon"
	},

	rarity: "None",
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

	attacks: [
		{
			cost: ["Psychic"],

			name: {
				en: "Mystical Return",
				pt: "Retorno Místico",
				fr: "Retour Mystique",
				de: "Mystische Rückkehr",
				es: "Retorno Místico",
				it: "Ritorno Mistico"
			},

			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon. Shuffle that Pokémon and all attached cards into their deck.",
				pt: "Jogue uma moeda. Se sair cara, escolha 1 dos Pokémon no Banco do seu oponente. Embaralhe aquele Pokémon e todas as cartas ligadas a ele no baralho dele.",
				fr: "Lancez une pièce. Si c'est face, choisissez l'un des Pokémon de Banc de votre adversaire. Mélangez avec son deck ce Pokémon-là et toutes les cartes qui lui sont attachées.",
				de: "Wirf 1 Münze. Wähle bei Kopf 1 Pokémon auf der Bank deines Gegners. Mische jenes Pokémon und alle angelegten Karten in sein Deck.",
				es: "Lanza 1 moneda. Si sale cara, elige 1 de los Pokémon en Banca de tu rival. Pon ese Pokémon y todas las cartas unidas a él en su baraja y barájalas todas.",
				it: "Lancia una moneta. Se esce testa, scegli uno dei Pokémon nella panchina del tuo avversario. Rimischia quel Pokémon e tutte le carte a esso assegnate nel suo mazzo."
			}},
		{
			cost: ["Psychic", "Colorless", "Colorless"],

			name: {
				en: "Disarming Voice",
				pt: "Voz Desarmante",
				fr: "Voix Enjôleuse",
				de: "Säuselstimme",
				es: "Voz Cautivadora",
				it: "Incantavoce"
			},

			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso."
			},

			damage: 90
		},
	],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Susumu Maeya"
}

export default card