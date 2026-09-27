import { Card } from "../../../interfaces"
import Set from "../Play! Pokémon Prize Pack Series 09"

const card: Card = {
	set: Set,

	cameoDexIds: [208],

	name: {
		en: "Boss's Orders",
		fr: "Ordres du Boss",
		es: "Órdenes de Jefes",
		'es-mx': "Órdenes de Jefes",
		de: "Befehl vom Boss",
		it: "Ordini del Capo",
		pt: "Ordem da Chefia"
	},

	illustrator: "akagi",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
		fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
		es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
		'es-mx': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
		de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Du kannst während deines Zuges nur 1 Unterstützerkarte spielen.",
		it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
		pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
		},
	],
}

export default card
