import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Dondozo",
		fr: "Oyacata",
		de: "Heerashai",
		it: "Dondozo",
		es: "Dondozo",
		pt: "Dondozo"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Release Rage",
			fr: "Colère Libérée",
			de: "Wut ablassen",
			it: "Scatenafuria",
			es: "Furia Desatada",
			pt: "Irradiar Ira"
		},

		effect: {
			en: "This attack does 50 damage for each Tatsugiri in your discard pile.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Nigirigon dans votre pile de défausse.",
			de: "Diese Attacke fügt für jedes Nigiragi in deinem Ablagestapel 50 Schadenspunkte zu.",
			it: "Questo attacco infligge 50 danni per ogni Tatsugiri nella tua pila degli scarti.",
			es: "Este ataque hace 50 puntos de daño por cada Tatsugiri en tu pila de descartes.",
			pt: "Este ataque causa 50 pontos de dano para cada Tatsugiri na sua pilha de descarte."
		},

		damage: "50×"
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			en: "Heavy Splash",
			fr: "Éclaboussure Massive",
			de: "Heftiger Platscher",
			it: "Grande Splash",
			es: "Salpicadura Formidable",
			pt: "Borrifada Pesada"
		},

		damage: 120
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card