import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Dondozo",
		fr: "Oyacata",
		es: "Dondozo",
		it: "Dondozo",
		pt: "Dondozo"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Release Rage",
			fr: "Colère Libérée",
			es: "Furia Desatada",
			it: "Scatenafuria",
			pt: "Irradiar Ira"
		},

		effect: {
			en: "This attack does 50 damage for each Tatsugiri in your discard pile.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Nigirigon dans votre pile de défausse.",
			es: "Este ataque hace 50 puntos de daño por cada Tatsugiri en tu pila de descartes.",
			it: "Questo attacco infligge 50 danni per ogni Tatsugiri nella tua pila degli scarti.",
			pt: "Este ataque causa 50 pontos de dano para cada Tatsugiri na sua pilha de descarte."
		},

		damage: "50×"
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			en: "Heavy Splash",
			fr: "Éclaboussure Massive",
			es: "Salpicadura Formidable",
			it: "Grande Splash",
			pt: "Borrifada Pesada"
		},

		damage: 120
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card