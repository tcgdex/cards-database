import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [369],
	set: Set,

	name: {
		'en-us': "Relicanth",
		'fr-fr': "Relicanth",
		'es-es': "Relicanth",
		'it-it': "Relicanth",
		'pt-br': "Relicanth",
		'de-de': "Relicanth"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Fossil Finding",
			'fr-fr': "Découverte Fossile",
			'es-es': "Hallazgo Fósil",
			'it-it': "Trova Fossili",
			'pt-br': "Descoberta de Fóssil",
			'de-de': "Fossilbergung"
		},

		effect: {
			'en-us': "Shuffle up to 4 in any combination of Unidentified Fossil and Rare Fossil cards from your discard pile into your deck.",
			'fr-fr': "Mélangez avec votre deck une combinaison d'un maximum de 4 cartes Fossile Inconnu et cartes Fossile Rare de votre pile de défausse.",
			'es-es': "Pon hasta 4 cartas de Fósil Desconocido y Fósil Raro, en cualquier combinación, de tu pila de descartes en tu baraja y barájalas todas.",
			'it-it': "Rimischia fino a quattro carte Fossile Sconosciuto e Fossile Raro in qualsiasi combinazione dalla tua pila degli scarti nel tuo mazzo.",
			'pt-br': "Embaralhe até 4 cartas Fóssil Não Identificado e Fóssil Raro da sua pilha de descarte no seu baralho em qualquer combinação.",
			'de-de': "Mische eine beliebige Kombination aus bis zu 4 Unbekanntes Fossil- und Seltenes Fossil-Karten aus deinem Ablagestapel in dein Deck."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Water Pulse",
			'fr-fr': "Vibraqua",
			'es-es': "Hidropulso",
			'it-it': "Idropulsar",
			'pt-br': "Pulso d'Água",
			'de-de': "Aquawelle"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Rock-hard scales and oil-filled swim bladders allow this Pokémon to survive the intense water pressure of the deep sea.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682090,
				tcgplayer: 451684
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682090,
				tcgplayer: 451684
			}
		},
	],
}

export default card
