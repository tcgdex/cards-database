import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Cherrim",
		fr: "Ceriflor",
		es: "Cherrim",
		it: "Cherrim",
		pt: "Cherrim",
		de: "Kinoso"
	},

	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
		es: "Cherubi",
		it: "Cherubi",
		pt: "Cherubi",
		de: "Kikugi"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Spring Bloom",
			fr: "Floraison Vernale",
			es: "Floración Primaveral",
			it: "Fioritura Primaverile",
			pt: "Florescer Primaveril",
			de: "Frühlingsblühen"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Grass Energy card from your hand to 1 of your Pokémon that doesn’t have a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes).",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Grass de votre main à l’un de vos Pokémon n’ayant pas d’encadré Règle(les Pokémon-V, Pokémon-GX, etc. ont des encadrés Règle).",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Grass de tu mano a 1 de tus Pokémon que no tenga un recuadro de regla (Pokémon V, Pokémon-GX, etc. tienen recuadros de regla).",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon che non ha una regola speciale una carta Energia Grass dalla tua mano tutte le volte che vuoi. I Pokémon-V, i Pokémon-GX, ecc. hanno regole speciali.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia Grass da sua mão a 1 dos seus Pokémon que não tenha uma Caixa de Regras (Pokémon V, Pokémon-GX, etc. têm Caixas de Regras).",
			de: "Beliebig oft während deines Zuges kannst du 1 Grass-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen, das kein Regelfeld hat (Pokémon-V, Pokémon-GX usw. haben Regelfelder)."
		}
	}],

	attacks: [{
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
			es: "Bomba Germen",
			it: "Semebomba",
			pt: "Bomba de Sementes",
			de: "Samenbomben"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "The faint scent that emanates from its full blossom entices bug Pokémon to it."
	}
}

export default card