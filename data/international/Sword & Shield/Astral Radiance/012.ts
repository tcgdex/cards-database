import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [416],
	set: Set,

	name: {
		'en-us': "Vespiquen",
		'fr-fr': "Apireine",
		'es-es': "Vespiquen",
		'it-it': "Vespiquen",
		'pt-br': "Vespiquen",
		'de-de': "Honweisel"
	},

	illustrator: "Yuya Oka",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'es-es': "Combee",
		'it-it': "Combee",
		'pt-br': "Combee",
		'de-de': "Wadribie"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Honey Rush",
			'fr-fr': "Ruée Miel",
			'es-es': "Fiebre de Miel",
			'it-it': "Ipermiele",
			'pt-br': "Adrenalina de Mel",
			'de-de': "Honigrausch"
		},

		effect: {
			'en-us': "Reveal any number of Sweet Honey cards from your hand. This attack does 60 damage for each card you revealed in this way.",
			'fr-fr': "Montrez autant de cartes Miel que vous voulez de votre main. Cette attaque inflige 60 dégâts pour chaque carte montrée de cette façon.",
			'es-es': "Enseña cualquier cantidad de cartas de Miel de tu mano. Este ataque hace 60 puntos de daño por cada carta que hayas enseñado de esta manera.",
			'it-it': "Mostra un numero qualsiasi di carte Miele che hai in mano. Questo attacco infligge 60 danni per ogni carta che hai mostrato in questo modo.",
			'pt-br': "Revele qualquer número de cartas Mel Doce na sua mão. Este ataque causa 60 pontos de dano para cada carta revelada desta forma.",
			'de-de': "Zeige deinem Gegner beliebig viele Honig-Karten auf deiner Hand. Diese Attacke fügt für jede auf diese Weise gezeigte Karte 60 Schadenspunkte zu."
		},

		damage: "60×"
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It skillfully commands its grubs in battles with its enemies. The grubs are willing to risk their lives to defend Vespiquen.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658504,
				tcgplayer: 272212
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658504,
				tcgplayer: 272212
			}
		},
	],
}

export default card
