import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Smeargle",
		fr: "Queulorior",
		es: "Smeargle",
		it: "Smeargle",
		pt: "Smeargle",
		de: "Farbeagle"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Kouki Saitou",

	attacks: [{
		name: {
			en: "Live Painting",
			fr: "Toile Vivante",
			es: "Pintura en Vivo",
			it: "Pittura dal Vivo",
			pt: "Live Painting",
			de: "Live-Malerei"
		},

		effect: {
			en: "Reveal any number of basic Energy cards from your hand. This attack does 30 more damage for each type of basic Energy you revealed in this way.",
			fr: "Montrez autant de cartes Énergie de base que vous le voulez de votre main. Cette attaque inflige 30 dégâts supplémentaires pour chaque type d’Énergie de base montrée de cette façon.",
			es: "Enseña cualquier cantidad de cartas de Energía Básica de tu mano. Este ataque hace 30 puntos de daño más por cada tipo de Energía Básica que hayas enseñado de esta manera.",
			it: "Mostra un numero qualsiasi di carte Energia base che hai in mano. Questo attacco infligge 30 danni in più per ogni tipo di Energia base che hai mostrato in questo modo.",
			pt: "Reveal any number of basic Energy cards from your hand. This attack does 30 more damage for each type of basic Energy you revealed in this way.",
			de: "Zeige deinem Gegner beliebig viele Basis-Energiekarten auf deiner Hand. Diese Attacke fügt für jeden auf diese Weise gezeigten Basis-Energietyp 30 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card