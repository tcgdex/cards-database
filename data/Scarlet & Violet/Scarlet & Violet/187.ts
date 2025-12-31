import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Pokémon Catcher",
		fr: "Attrape-Pokémon",
		es: "Capturapokémon",
		it: "Acchiappa-Pokémon",
		pt: "Pegador de Pokémon",
		de: "Pokémon-Fänger"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
		fr: "Lancez une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
		es: "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
		it: "Lancia una moneta. Se esce testa, sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
		pt: "Jogue uma moeda. Se sair cara, mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
		de: "Wirf 1 Münze. Wechsle bei Kopf 1 Pokémon von der Bank deines Gegners in die Aktive Position ein."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Studio Bora Inc.",

	thirdParty: {
        cardmarket: 702483,
        tcgplayer: 488093
    }
}

export default card