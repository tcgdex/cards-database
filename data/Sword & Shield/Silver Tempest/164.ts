import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Serena",
		fr: "Serena",
		es: "Serena",
		it: "Serena",
		pt: "Serena",
		de: "Serena"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Choose 1:\n• Discard up to 3 cards from your hand. (You must discard at least 1 card.) If you do, draw cards until you have 5 cards in your hand.\n• Switch 1 of your opponent's Benched Pokémon V with their Active Pokémon.",
		fr: "Choisissez l'une de ces options :\n• Défaussez jusqu'à 3 cartes de votre main.\n(Vous devez défausser au moins une carte.) Dans ce cas, piochez des cartes jusqu'à en avoir 5 en main.\n• Échangez l'un des Pokémon-V de Banc de votre adversaire contre son Pokémon Actif.",
		es: "Elige 1 opción:\n• Descarta hasta 3 cartas de tu mano. (Debes descartar por lo menos 1 carta). Si lo haces, roba cartas hasta que tengas 5 cartas en tu mano.\n• Cambia 1 de los Pokémon V en Banca de tu rival por su Pokémon Activo.",
		it: "Scegli:\n• Scarta fino a tre carte che hai in mano.\nDevi scartare almeno una carta. Se lo fai, pesca fino ad avere cinque carte in mano.\n• Scambia uno dei Pokémon-V nella panchina del tuo avversario con il suo Pokémon attivo.",
		pt: "Escolha 1:\n• Descarte até 3 cartas da sua mão\n(você deve descartar pelo menos 1 carta). Se fizer isto, compre cartas até ter 5 cartas na sua mão.\n• Troque 1 dos Pokémon V no Banco do seu oponente pelo Pokémon Ativo dele(a).",
		de: "Wähle 1:\n• Lege bis zu 3 Karten aus deiner Hand auf deinen Ablagestapel. (Du musst mindestens 1 Karte auf deinen Ablagestapel legen.) Wenn du das machst, ziehe so lange Karten, bis du 5 Karten auf deiner Hand hast.\n• Tausche 1 Pokémon-V auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
	},

	trainerType: "Supporter",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682211
	}
}

export default card