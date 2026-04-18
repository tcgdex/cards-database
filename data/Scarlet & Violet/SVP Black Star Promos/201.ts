import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
		de: "Zebritz",
		it: "Zebstrika",
		es: "Zebstrika",
		pt: "Zebstrika"
	},

	illustrator: "Krgc",
	rarity: "None",
	category: "Pokemon",
	dexId: [523],
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
		de: "Elezeba",
		it: "Blitzle",
		es: "Blitzle",
		pt: "Blitzle"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Full Speed",
			fr: "Pleine Vitesse",
			de: "Full Speed",
			it: "Piena Velocità",
			es: "A Toda Velocidad",
			pt: "Velocidade Máxima"
	},

		effect: {
			en: "Discard your hand and draw 6 cards.",
			fr: "Défaussez votre main, puis piochez 6 cartes.",
			de: "Lege deine Handkarten auf deinen Ablagestapel und ziehe 6 Karten.",
			it: "Scarta le carte che hai in mano e pesca sei carte.",
			es: "Descarta las cartas de tu mano y roba 6 cartas.",
			pt: "Descarte a sua mão e compre 6 cartas."
	}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
			de: "Kopf-Blitz",
			it: "Zuccalampo",
			es: "Rayo de Cabeza",
			pt: "Raio de Cabeça"
	},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			subtype: "cosmos"
		}
	]
}

export default card
