import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		'en-us': "Sylveon",
		'fr-fr': "Nymphali",
		'es-es': "Sylveon",
		'it-it': "Sylveon",
		'pt-br': "Sylveon",
		'de-de': "Feelinara"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Mystical Return",
			'fr-fr': "Retour Mystique",
			'es-es': "Retorno Místico",
			'it-it': "Ritorno Mistico",
			'pt-br': "Retorno Místico",
			'de-de': "Mystische Rückkehr"
		},

		effect: {
			'en-us': "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon. Shuffle that Pokémon and all attached cards into their deck.",
			'fr-fr': "Lancez une pièce. Si c'est face, choisissez l'un des Pokémon de Banc de votre adversaire. Mélangez avec son deck ce Pokémon-là et toutes les cartes qui lui sont attachées.",
			'es-es': "Lanza 1 moneda. Si sale cara, elige 1 de los Pokémon en Banca de tu rival. Pon ese Pokémon y todas las cartas unidas a él en su baraja y barájalas todas.",
			'it-it': "Lancia una moneta. Se esce testa, scegli uno dei Pokémon nella panchina del tuo avversario. Rimischia quel Pokémon e tutte le carte a esso assegnate nel suo mazzo.",
			'pt-br': "Jogue uma moeda. Se sair cara, escolha 1 dos Pokémon no Banco do seu oponente. Embaralhe aquele Pokémon e todas as cartas ligadas a ele no baralho dele.",
			'de-de': "Wirf 1 Münze. Wähle bei Kopf 1 Pokémon auf der Bank deines Gegners. Mische jenes Pokémon und alle angelegten Karten in sein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Disarming Voice",
			'fr-fr': "Voix Enjôleuse",
			'es-es': "Voz Cautivadora",
			'it-it': "Incantavoce",
			'pt-br': "Voz Desarmante",
			'de-de': "Säuselstimme"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "Kuroimori",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780917,
				tcgplayer: 560332
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780917,
				tcgplayer: 560332
			}
		},
	],
}

export default card
