import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [762],
	set: Set,

	name: {
		en: "Steenee",
		fr: "Candine",
		es: "Steenee",
		it: "Steenee",
		pt: "Steenee",
		de: "Frubaila"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Bounsweet",
		fr: "Croquine",
		es: "Bounsweet",
		it: "Bounsweet",
		pt: "Bounsweet",
		de: "Frubberl"
	},

	attacks: [{
		name: {
			en: "Splash",
			fr: "Trempette",
			es: "Salpicadura",
			it: "Splash",
			pt: "Borrifada",
			de: "Platscher"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Stomp",
			fr: "Écrasement",
			es: "Pisotón",
			it: "Pestone",
			pt: "Pisotear",
			de: "Stampfer"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "50+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Any Corvisquire that pecks at this Pokémon will be greeted with a smack from its sepals followed by a sharp kick."
	},

	thirdParty: {
		cardmarket: 567094
	}
}

export default card
