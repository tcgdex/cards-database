import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Malamar",
		fr: "Sepiatroce",
		es: "Malamar",
		it: "Malamar",
		pt: "Malamar",
		de: "Calamanero"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
		es: "Inkay",
		it: "Inkay",
		pt: "Inkay",
		de: "Iscalar"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Rapid Strike Tentacles",
			fr: "Tentacules Mille Poings",
			es: "Tentáculos Golpe Fluido",
			it: "Tentacoli Colpo Rapido",
			pt: "Tentáculos Golpe Fluido",
			de: "Fließender-Angriff-Tentakel"
		},

		effect: {
			en: "Reveal any number of Rapid Strike cards from your hand. This attack does 40 damage for each card you revealed in this way. Then, shuffle those cards into your deck.",
			fr: "Montrez autant de cartes Mille Poings que vous le voulez de votre main. Cette attaque inflige 40 dégâts pour chaque carte montrée de cette façon. Mélangez ensuite ces cartes avec votre deck.",
			es: "Enseña cualquier cantidad de cartas de Golpe Fluido de tu mano. Este ataque hace 40 puntos de daño por cada carta que hayas enseñado de esta manera. Después, pon esas cartas en tu baraja y barájalas todas.",
			it: "Mostra un numero qualsiasi di carte Colpo Rapido che hai in mano. Questo attacco infligge 40 danni per ogni carta che hai mostrato in questo modo. Poi rimischia quelle carte nel tuo mazzo.",
			pt: "Revele qualquer número de cartas Golpe Fluido da sua mão. Este ataque causa 40 pontos de dano para cada carta revelada desta forma. Em seguida, embaralhe aquelas cartas no seu baralho.",
			de: "Zeige deinem Gegner beliebig viele Fließender-Angriff-Karten auf deiner Hand. Diese Attacke fügt für jede auf diese Weise gezeigte Karte 40 Schadenspunkte zu. Mische jene Karten anschließend in dein Deck."
		},

		damage: "40×"
	}],

	retreat: 3,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
