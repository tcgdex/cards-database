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
		en: "Crustle",
		fr: "Crabaraque",
		es: "Crustle",
		it: "Crustle",
		pt: "Crustle",
		de: "Castellith"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",
	illustrator: "sowsow",

	attacks: [{
		name: {
			en: "X-Scissor",
			fr: "Plaie Croix",
			es: "Tijera X",
			it: "Forbice X",
			pt: "X-Scissor",
			de: "Kreuzschere"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 60 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			pt: "Flip a coin. If heads, this attack does 60 more damage.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Hammer In",
			de: "Einhämmern"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,

	evolveFrom: {
		en: "Dwebble",
		fr: "Crabicoque",
		es: "Dwebble",
		it: "Dwebble",
		pt: "Dwebble",
		de: "Lithomith"
	},

	description: {
		en: "Its thick claws are its greatest weapons. They're mighty enough to crack Rhyperior's carapace."
	},

	dexId: [558],
	regulationMark: "E"
}

export default card
