import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Toy Catcher",
		fr: "Jouet Attrapeur",
		es: "Capturador de Juguete",
		it: "Acchiappa-Pokémon Giocattolo",
		pt: "Pegador de Brinquedo",
		de: "Spielzeugfänger"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Switch 1 of your opponent's Benched Pokémon that has 50 HP or less remaining with your opponent's Active Pokémon.",
		fr: "Échangez l'un des Pokémon de Banc de votre adversaire auquel il reste 50 PV ou moins contre son Pokémon Actif.",
		es: "Cambia 1 de los Pokémon en Banca de tu rival al que le queden 50 PS o menos por el Pokémon Activo de tu rival.",
		it: "Scambia uno dei Pokémon nella panchina del tuo avversario che ha 50 PS o meno rimanenti con il Pokémon attivo del tuo avversario.",
		pt: "Troque 1 dos Pokémon no Banco do seu oponente que tiver PS restante de 50 ou menos pelo Pokémon Ativo dele(a).",
		de: "Tausche 1 Pokémon auf der Bank deines Gegners, das 50 oder weniger verbleibende KP hat, gegen das Aktive Pokémon deines Gegners aus."
	},

	trainerType: "Item",
	illustrator: "sadaji",
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574221
	}
}

export default card
