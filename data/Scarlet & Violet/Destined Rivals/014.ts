import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Lurantis",
		fr: "Floramantis",
		de: "Mantidea",
		it: "Lurantis",
		es: "Lurantis",
		pt: "Lurantis",
		'es-mx': "Lurantis"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
			de: "Rasierblatt",
			it: "Foglielama",
			es: "Hoja Afilada",
			pt: "Folha Navalha",
			'es-mx': "Hojas Navaja"
		},

		damage: 30
	}, {
		cost: ["Grass"],

		name: {
			en: "Petal Blade Dance",
			fr: "Danse Lame Pétale",
			de: "Blütenschwerttanz",
			it: "Lame di Petali Danzanti",
			es: "Danza de Pétalos Cortantes",
			pt: "Dança Cortante de Pétalas",
			'es-mx': "Danza de Pétalos Cortantes"
		},

		effect: {
			en: "Discard 2 Basic {G} Energy cards from your hand. If you can't discard 2 cards in this way, this attack does nothing.",
			fr: "Défaussez 2 cartes Énergie {G} de base de votre main. Si vous ne pouvez pas défausser 2 cartes de cette façon, cette attaque ne fait rien.",
			de: "Lege 2 Basis-{G}-Energiekarten aus deiner Hand auf deinen Ablagestapel. Wenn du auf diese Weise nicht 2 Karten auf deinen Ablagestapel legen kannst, hat diese Attacke keine Auswirkungen.",
			it: "Scarta due carte Energia base {G} che hai in mano. Se non puoi scartare due carte in questo modo, questo attacco non ha effetto.",
			es: "Descarta 2 cartas de Energía {G} Básica de tu mano. Si no puedes descartar 2 cartas de esta manera, este ataque no hace nada.",
			pt: "Descarte 2 cartas de Energia {G} Básica da sua mão. Se não puder descartar 2 cartas desta forma, este ataque não fará nada.",
			'es-mx': "Descarta 2 cartas de Energía {G} Básica de tu mano. Si no puedes descartar 2 cartas de esta manera, este ataque no hace nada."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card