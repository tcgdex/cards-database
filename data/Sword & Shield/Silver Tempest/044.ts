import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [369],
	set: Set,

	name: {
		en: "Relicanth",
		fr: "Relicanth",
		es: "Relicanth",
		it: "Relicanth",
		pt: "Relicanth",
		de: "Relicanth"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fossil Finding",
			fr: "Découverte Fossile",
			es: "Hallazgo Fósil",
			it: "Trova Fossili",
			pt: "Descoberta de Fóssil",
			de: "Fossilbergung"
		},

		effect: {
			en: "Shuffle up to 4 in any combination of Unidentified Fossil and Rare Fossil cards from your discard pile into your deck.",
			fr: "Mélangez avec votre deck une combinaison d'un maximum de 4 cartes Fossile Inconnu et cartes Fossile Rare de votre pile de défausse.",
			es: "Pon hasta 4 cartas de Fósil Desconocido y Fósil Raro, en cualquier combinación, de tu pila de descartes en tu baraja y barájalas todas.",
			it: "Rimischia fino a quattro carte Fossile Sconosciuto e Fossile Raro in qualsiasi combinazione dalla tua pila degli scarti nel tuo mazzo.",
			pt: "Embaralhe até 4 cartas Fóssil Não Identificado e Fóssil Raro da sua pilha de descarte no seu baralho em qualquer combinação.",
			de: "Mische eine beliebige Kombination aus bis zu 4 Unbekanntes Fossil- und Seltenes Fossil-Karten aus deinem Ablagestapel in dein Deck."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
			es: "Hidropulso",
			it: "Idropulsar",
			pt: "Pulso d'Água",
			de: "Aquawelle"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682090
	}
}

export default card