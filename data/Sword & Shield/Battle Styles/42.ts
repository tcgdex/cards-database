import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [593],
	set: Set,

	name: {
		en: "Jellicent",
		fr: "Moyade",
		es: "Jellicent",
		it: "Jellicent",
		pt: "Jellicent",
		de: "Apoquallyp"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
		es: "Frillish",
		it: "Frillish",
		pt: "Frillish",
		de: "Quabbel"
	},

	attacks: [{
		name: {
			en: "Sediment Sink",
			fr: "Sédiment Visqueux",
			es: "Sumidero de Sedimentos",
			it: "Sedimentazione",
			pt: "Sumidouro de Sedimentos",
			de: "Sedimentsenke"
		},

		effect: {
			en: "This attack does 10 damage for each Water Energy card in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts pour chaque carte Énergie Water dans votre pile de défausse.",
			es: "Este ataque hace 10 puntos de daño por cada carta de Energía Water en tu pila de descartes.",
			it: "Questo attacco infligge 10 danni per ogni carta Energia Water nella tua pila degli scarti.",
			pt: "Este ataque causa 10 pontos de dano para cada carta de Energia Water na sua pilha de descarte.",
			de: "Diese Attacke fügt für jede Water-Energiekarte in deinem Ablagestapel 10 Schadenspunkte zu."
		},

		damage: "10×",
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Whenever a full moon hangs in the night sky, schools of Jellicent gather near the surface of the sea, waiting for their prey to appear."
	},

	thirdParty: {
		cardmarket: 545321,
		tcgplayer: 234185
	}
}

export default card