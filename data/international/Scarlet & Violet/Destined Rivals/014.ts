import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [754],
	set: Set,

	name: {
		'en-us': "Lurantis",
		'fr-fr': "Floramantis",
		'de-de': "Mantidea",
		'it-it': "Lurantis",
		'es-es': "Lurantis",
		'pt-br': "Lurantis",
		'es-mx': "Lurantis"
	},

	illustrator: "Masako Tomii",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Fomantis",
		'fr-fr': "Mimantis",
		'de-de': "Imantis",
		'it-it': "Fomantis",
		'es-es': "Fomantis",
		'pt-br': "Fomantis",
		'es-mx': "Fomantis"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'de-de': "Rasierblatt",
			'it-it': "Foglielama",
			'es-es': "Hoja Afilada",
			'pt-br': "Folha Navalha",
			'es-mx': "Hojas Navaja"
		},

		damage: 30
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Petal Blade Dance",
			'fr-fr': "Danse Lame Pétale",
			'de-de': "Blütenschwerttanz",
			'it-it': "Lame di Petali Danzanti",
			'es-es': "Danza de Pétalos Cortantes",
			'pt-br': "Dança Cortante de Pétalas",
			'es-mx': "Danza de Pétalos Cortantes"
		},

		effect: {
			'en-us': "Discard 2 Basic {G} Energy cards from your hand. If you can't discard 2 cards in this way, this attack does nothing.",
			'fr-fr': "Défaussez 2 cartes Énergie {G} de base de votre main. Si vous ne pouvez pas défausser 2 cartes de cette façon, cette attaque ne fait rien.",
			'de-de': "Lege 2 Basis-{G}-Energiekarten aus deiner Hand auf deinen Ablagestapel. Wenn du auf diese Weise nicht 2 Karten auf deinen Ablagestapel legen kannst, hat diese Attacke keine Auswirkungen.",
			'it-it': "Scarta due carte Energia base {G} che hai in mano. Se non puoi scartare due carte in questo modo, questo attacco non ha effetto.",
			'es-es': "Descarta 2 cartas de Energía {G} Básica de tu mano. Si no puedes descartar 2 cartas de esta manera, este ataque no hace nada.",
			'pt-br': "Descarte 2 cartas de Energia {G} Básica da sua mão. Se não puder descartar 2 cartas desta forma, este ataque não fará nada.",
			'es-mx': "Descarta 2 cartas de Energía {G} Básica de tu mano. Si no puedes descartar 2 cartas de esta manera, este ataque no hace nada."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825888,
				tcgplayer: 632840
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825888,
				tcgplayer: 632840
			}
		},
	],
}

export default card
