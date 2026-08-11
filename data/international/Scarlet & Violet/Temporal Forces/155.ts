import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Morty's Conviction",
		'fr-fr': "Conviction de Mortimer",
		'es-es': "Convicción de Morti",
		'it-it': "Fermezza di Angelo",
		'pt-br': "Convicção do Morty",
		'de-de': "Jens' Überzeugung"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "You can use this card only if you discard another card from your hand.\n\nDraw a card for each of your opponent's Benched Pokémon.",
		'fr-fr': "Vous ne pouvez utiliser cette carte que si vous défaussez une autre carte de votre main.\nPiochez une carte pour chacun des Pokémon de Banc de votre adversaire.",
		'es-es': "Puedes usar esta carta solo si descartas otra carta de tu mano.\nRoba 1 carta por cada uno de los Pokémon en Banca de tu rival.",
		'it-it': "Puoi usare questa carta solo se scarti un'altra carta che hai in mano.\nPesca una carta per ogni Pokémon nella panchina del tuo avversario.",
		'pt-br': "Você só pode usar esta carta se descartar outra carta da sua mão.\nCompre uma carta para cada um dos Pokémon no Banco do seu oponente.",
		'de-de': "Du kannst diese Karte nur einsetzen, wenn du noch 1 andere Karte aus deiner Hand auf deinen Ablagestapel legst.\nZiehe 1 Karte für jedes Pokémon auf der Bank deines Gegners."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760785,
				tcgplayer: 542671
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760785,
				tcgplayer: 542671
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"]
		}
	],

	illustrator: "GIDORA",

}

export default card