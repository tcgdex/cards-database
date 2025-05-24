import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Morty's Conviction",
		fr: "Conviction de Mortimer",
		es: "Convicción de Morti",
		it: "Fermezza di Angelo",
		pt: "Convicção do Morty",
		de: "Jens' Überzeugung"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You can use this card only if you discard another card from your hand.\n\nDraw a card for each of your opponent's Benched Pokémon.",
		fr: "Vous ne pouvez utiliser cette carte que si vous défaussez une autre carte de votre main.\nPiochez une carte pour chacun des Pokémon de Banc de votre adversaire.",
		es: "Puedes usar esta carta solo si descartas otra carta de tu mano.\nRoba 1 carta por cada uno de los Pokémon en Banca de tu rival.",
		it: "Puoi usare questa carta solo se scarti un'altra carta che hai in mano.\nPesca una carta per ogni Pokémon nella panchina del tuo avversario.",
		pt: "Você só pode usar esta carta se descartar outra carta da sua mão.\nCompre uma carta para cada um dos Pokémon no Banco do seu oponente.",
		de: "Du kannst diese Karte nur einsetzen, wenn du noch 1 andere Karte aus deiner Hand auf deinen Ablagestapel legst.\nZiehe 1 Karte für jedes Pokémon auf der Bank deines Gegners."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "GIDORA"
}

export default card