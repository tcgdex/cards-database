import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Shauntal",
		fr: "Anis",
		es: "Anís",
		it: "Antemia",
		pt: "Shauntal",
		de: "Anissa"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot. If tails, switch your Active Pokémon with 1 of your Benched Pokémon.",
		fr: "Lancez une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Si c'est pile, échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		es: "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Si sale cruz, cambia tu Pokémon Activo por uno de tus Pokémon en Banca.",
		it: "Lancia una moneta. Se esce testa, sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Se esce croce, scambia il tuo Pokémon attivo con uno della tua panchina.",
		pt: "Jogue uma moeda. Se sair cara, mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Se sair coroa, troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
		de: "Wirf 1 Münze. Wechsle bei Kopf 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Tausche bei Zahl dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "yuu",

	thirdParty: {
		cardmarket: 740717
	}
}

export default card