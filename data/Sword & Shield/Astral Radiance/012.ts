import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [416],
	set: Set,

	name: {
		en: "Vespiquen",
		fr: "Apireine",
		es: "Vespiquen",
		it: "Vespiquen",
		pt: "Vespiquen",
		de: "Honweisel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
		es: "Combee",
		it: "Combee",
		pt: "Combee",
		de: "Wadribie"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Honey Rush",
			fr: "Ruée Miel",
			es: "Fiebre de Miel",
			it: "Ipermiele",
			pt: "Adrenalina de Mel",
			de: "Honigrausch"
		},

		effect: {
			en: "Reveal any number of Sweet Honey cards from your hand. This attack does 60 damage for each card you revealed in this way.",
			fr: "Montrez autant de cartes Miel que vous voulez de votre main. Cette attaque inflige 60 dégâts pour chaque carte montrée de cette façon.",
			es: "Enseña cualquier cantidad de cartas de Miel de tu mano. Este ataque hace 60 puntos de daño por cada carta que hayas enseñado de esta manera.",
			it: "Mostra un numero qualsiasi di carte Miele che hai in mano. Questo attacco infligge 60 danni per ogni carta che hai mostrato in questo modo.",
			pt: "Revele qualquer número de cartas Mel Doce na sua mão. Este ataque causa 60 pontos de dano para cada carta revelada desta forma.",
			de: "Zeige deinem Gegner beliebig viele Honig-Karten auf deiner Hand. Diese Attacke fügt für jede auf diese Weise gezeigte Karte 60 Schadenspunkte zu."
		},

		damage: "60×"
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Pierce",
			fr: "Transpercement",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658504,
		tcgplayer: 272212
	}
}

export default card