import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [925],
	set: Set,

	name: {
		en: "Maushold",
		fr: "Famignol",
		es: "Maushold",
		it: "Maushold",
		pt: "Maushold",
		de: "Famieps"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	evolveFrom: {
		en: "Tandemaus",
		fr: "Compagnol",
		es: "Tandemaus",
		it: "Tandemaus",
		pt: "Tandemaus",
		de: "Zwieps"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slap",
			fr: "Gifle",
			es: "Bofetón",
			it: "Sberla",
			pt: "Tapa",
			de: "Hieb"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Family Attack",
			fr: "Attaque en Famille",
			es: "Ataque en Familia",
			it: "Attacco di Famiglia",
			pt: "Ataque em Família",
			de: "Familienangriff"
		},

		effect: {
			en: "This attack does 70 damage for each of your Maushold in play.",
			fr: "Cette attaque inflige 70 dégâts pour chacun de vos Famignol en jeu.",
			es: "Este ataque hace 70 puntos de daño por cada uno de tus Maushold en juego.",
			it: "Questo attacco infligge 70 danni per ogni tuo Maushold in gioco.",
			pt: "Este ataque causa 70 pontos de dano para cada um dos seus Maushold em jogo.",
			de: "Diese Attacke fügt für jedes deiner Famieps im Spiel 70 Schadenspunkte zu."
		},

		damage: "70×"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Shigenori Negishi",

	thirdParty: {
		cardmarket: 751612
	}
}

export default card