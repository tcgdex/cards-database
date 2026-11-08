import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Smeargle",
		'fr-fr': "Queulorior",
		'es-es': "Smeargle",
		'it-it': "Smeargle",
		'pt-br': "Smeargle",
		'de-de': "Farbeagle"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Kouki Saitou",

	attacks: [{
		name: {
			'en-us': "Live Painting",
			'fr-fr': "Toile Vivante",
			'es-es': "Pintura en Vivo",
			'it-it': "Pittura dal Vivo",
			'pt-br': "Live Painting",
			'de-de': "Live-Malerei"
		},

		effect: {
			'en-us': "Reveal any number of basic Energy cards from your hand. This attack does 30 more damage for each type of basic Energy you revealed in this way.",
			'fr-fr': "Montrez autant de cartes Énergie de base que vous le voulez de votre main. Cette attaque inflige 30 dégâts supplémentaires pour chaque type d'Énergie de base montrée de cette façon.",
			'es-es': "Enseña cualquier cantidad de cartas de Energía Básica de tu mano. Este ataque hace 30 puntos de daño más por cada tipo de Energía Básica que hayas enseñado de esta manera.",
			'it-it': "Mostra un numero qualsiasi di carte Energia base che hai in mano. Questo attacco infligge 30 danni in più per ogni tipo di Energia base che hai mostrato in questo modo.",
			'pt-br': "Reveal any number of basic Energy cards from your hand. This attack does 30 more damage for each type of basic Energy you revealed in this way.",
			'de-de': "Zeige deinem Gegner beliebig viele Basis-Energiekarten auf deiner Hand. Diese Attacke fügt für jeden auf diese Weise gezeigten Basis-Energietyp 30 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	dexId: [235],

	description: {
		'en-us': "It draws symbols with the fluid that oozes from the tip of its tail. Depending on the symbol, Smeargle fanatics will pay big money for them."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574182,
				tcgplayer: 246853
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574182,
				tcgplayer: 246853
			}
		},
	],
}

export default card
