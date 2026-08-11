import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [1022],
	set: Set,

	name: {
		'en-us': "Iron Boulder",
		'fr-fr': "Roc-de-Fer",
		'es-es': "Ferromole",
		'pt-br': "Rocha Férrea",
		'it-it': "Massoferreo",
		'de-de': "Eisenfels"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Adjusted Horn",
			'fr-fr': "Corne Ajustée",
			'es-es': "Cuerno Graduable",
			'pt-br': "Chifre Ajustado",
			'it-it': "Equicorno",
			'de-de': "Angepasstes Horn"
		},

		effect: {
			'en-us': "If you don't have the same number of cards in your hand as your opponent, this attack does nothing.",
			'fr-fr': "Si vous n'avez pas le même nombre de cartes dans votre main que votre adversaire, cette attaque ne fait rien.",
			'es-es': "Si no tienes la misma cantidad de cartas en tu mano que tu rival, este ataque no hace nada.",
			'pt-br': "Se você não tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque não fará nada.",
			'it-it': "Se non hai lo stesso numero di carte in mano del tuo avversario, questo attacco non ha effetto.",
			'de-de': "Wenn du nicht genauso viele Karten auf der Hand hast wie dein Gegner, hat diese Attacke keine Auswirkungen."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "H",

	illustrator: "GIDORA",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805435,
				tcgplayer: 610401
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805435,
				tcgplayer: 610401
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806470,
				tcgplayer: 610568
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806471,
				tcgplayer: 610669
			}
		},
	],
}

export default card
