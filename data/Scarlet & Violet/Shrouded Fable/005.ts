import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Decidueye",
		fr: "Archéduc",
		es: "Decidueye",
		it: "Decidueye",
		pt: "Decidueye",
		de: "Silvarro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Stock Up on Feathers",
			fr: "Réserve de Plumes",
			es: "Acopio de Plumas",
			it: "Scorta di Piume",
			pt: "Estoque de Penas",
			de: "Federvorrat"
		},

		effect: {
			en: "Draw cards until you have 7 cards in your hand.",
			fr: "Piochez des cartes jusqu'à en avoir 7 en main.",
			es: "Roba cartas hasta que tengas 7 cartas en tu mano.",
			it: "Pesca fino ad avere sette carte in mano.",
			pt: "Compre cartas até ter 7 cartas na sua mão.",
			de: "Ziehe so lange Karten, bis du 7 Karten auf deiner Hand hast."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Power Shot",
			fr: "Tir Puissant",
			es: "Disparo Poderoso",
			it: "Forzatiro",
			pt: "Disparo Poderoso",
			de: "Powersalve"
		},

		effect: {
			en: "Discard a Basic Grass Energy card from your hand. If you can't, this attack does nothing.",
			fr: "Défaussez une carte Énergie Grass de base de votre main. Si vous ne le pouvez pas, cette attaque ne fait rien.",
			es: "Descarta 1 carta de Energía Grass Básica de tu mano. Si no puedes, este ataque no hace nada.",
			it: "Scarta una carta Energia base Grass che hai in mano. Se non puoi, questo attacco non ha effetto.",
			pt: "Descarte uma carta de Energia Grass Básica da sua mão. Se não puder fazer isto, este ataque não fará nada.",
			de: "Lege 1 Basis-Grass-Energiekarte aus deiner Hand auf deinen Ablagestapel. Wenn du das nicht machen kannst, hat diese Attacke keine Auswirkungen."
		},

		damage: 170
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card