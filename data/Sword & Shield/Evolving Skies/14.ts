import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Trevenant VMAX",
		fr: "Desséliande VMAX",
		es: "Trevenant VMAX",
		it: "Trevenant VMAX",
		pt: "Trevenant VMAX",
		de: "Trombork VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	stage: "VMAX",
	illustrator: "MUGENUP",

	attacks: [{
		name: {
			en: "Missing in the Forest",
			fr: "Perdus en Forêt",
			es: "Desaparecidos en el Bosque",
			it: "Persi nella Foresta",
			pt: "Missing in the Forest",
			de: "Verschollen im Wald"
		},

		effect: {
			en: "This attack does 40 damage for each Supporter card in your opponent's discard pile.",
			fr: "Cette attaque inflige 40 dégâts pour chaque carte Supporter dans la pile de défausse de votre adversaire.",
			es: "Este ataque hace 40 puntos de daño por cada carta de Partidario en la pila de descartes de tu rival.",
			it: "Questo attacco infligge 40 danni per ogni carta Aiuto nella pila degli scarti del tuo avversario.",
			pt: "This attack does 40 damage for each Supporter card in your opponent's discard pile.",
			de: "Diese Attacke fügt für jede Unterstützerkarte im Ablagestapel deines Gegners 40 Schadenspunkte zu."
		},

		damage: "40×",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			en: "Max Tree",
			fr: "Arbromax",
			es: "Maxiárbol",
			it: "Dynatronco",
			pt: "Max Tree",
			de: "Dyna-Baum"
		},

		damage: 180,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,

	evolveFrom: {
		en: "Trevenant V",
		fr: "Desséliande-V",
		es: "Trevenant V",
		it: "Trevenant-V",
		pt: "Trevenant V",
		de: "Trombork-V"
	},

	dexId: [709],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574038,
		tcgplayer: 246708
	}
}

export default card
