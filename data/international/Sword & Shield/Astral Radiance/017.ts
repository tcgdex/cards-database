import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [549],
	set: Set,

	name: {
		'en-us': "Hisuian Lilligant V",
		'fr-fr': "Fragilady de Hisui V",
		'es-es': "Lilligant de Hisui V",
		'it-it': "Lilligant di Hisui V",
		'pt-br': "Lilligant de Hisui V",
		'de-de': "Hisui-Dressella V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'en-us': "Dance Gracefully",
			'fr-fr': "Danse Gracieuse",
			'es-es': "Baila con Gracia",
			'it-it': "Danza Elegante",
			'pt-br': "Dança Graciosa",
			'de-de': "Graziöser Tanz"
		},

		effect: {
			'en-us': "Draw cards until you have 6 cards in your hand.",
			'fr-fr': "Piochez des cartes jusqu'à en avoir 6 en main.",
			'es-es': "Roba cartas hasta que tengas 6 cartas en tu mano.",
			'it-it': "Pesca fino ad avere sei carte in mano.",
			'pt-br': "Compre cartas até ter 6 cartas na sua mão.",
			'de-de': "Ziehe so lange Karten, bis du 6 Karten auf deiner Hand hast."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Leaf Step",
			'fr-fr': "Enjambée de Feuillage",
			'es-es': "Paso Hoja",
			'it-it': "Passofoglia",
			'pt-br': "Passo de Folha",
			'de-de': "Blattschritt"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658511,
				tcgplayer: 272217
			}
		},
	],
}

export default card
