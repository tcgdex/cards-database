import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Boss's Orders (Giovanni)",
		fr: "Ordres du Boss (Giovanni)",
		es: "Órdenes de Jefes",
		it: "Ordini del Capo",
		pt: "Ordem da Chefia",
		de: "Befehl vom Boss"
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
		fr: "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
		es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
		it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
		pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
		de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
