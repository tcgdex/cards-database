import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Brandon",
		'fr-fr': "Bayar",
		'es-es': "Valente",
		'it-it': "Baldo",
		'pt-br': "Brandon",
		'de-de': "Brian"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "You can use this card only when it is the last card in your hand.\nDraw a card for each Benched Pokémon (both yours and your opponent's).",
		'fr-fr': "Vous ne pouvez utiliser cette carte que si c'est votre dernière carte en main.\nPiochez une carte pour chacun des Pokémon de Banc\n(les vôtres et ceux de votre adversaire).",
		'es-es': "Puedes usar esta carta solo cuando sea la última carta en tu mano.\nRoba 1 carta por cada Pokémon en Banca (tanto tuyos como de tu rival).",
		'it-it': "Puoi usare questa carta solo se è l'ultima carta che hai in mano.\nPesca una carta per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
		'pt-br': "Você só pode usar esta carta se ela for a última carta na sua mão.\nCompre 1 carta para cada Pokémon no Banco\n(seus e do seu oponente).",
		'de-de': "Du kannst diese Karte nur verwenden, wenn es die letzte Karte auf deiner Hand ist.\nZiehe 1 Karte für jedes Pokémon auf der Bank (deiner und der deines Gegners)."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682198,
				tcgplayer: 451800
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682198,
				tcgplayer: 451800
			}
		},
	],
}

export default card
