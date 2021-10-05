import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

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

	illustrator: "Tika Matsuno",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Spring Bloom",
			es: "Floración Primaveral",
			it: "Fioritura Primaverile",
			pt: "Spring Bloom",
			de: "Frühlingsblühen"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Grass Energy card from your hand to 1 of your Pokémon that doesn’t have a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes).",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Grass de tu mano a 1 de tus Pokémon que no tenga un recuadro de regla (Pokémon V, Pokémon-GX, etc. tienen recuadros de regla).",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon che non ha una regola speciale una carta Energia Grass dalla tua mano tutte le volte che vuoi. I Pokémon-V, i Pokémon-GX, ecc. hanno regole speciali.",
			pt: "As often as you like during your turn, you may attach a Grass Energy card from your hand to 1 of your Pokémon that doesn’t have a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes).",
			de: "Beliebig oft während deines Zuges kannst du 1 Grass-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen, das kein Regelfeld hat (Pokémon-V, Pokémon-GX usw. haben Regelfelder)."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "The faint scent that emanates from its full blossom entices bug Pokémon to it."
	},

	stage: "Stage1",
	dexId: [421],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	attacks: [{
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
			es: "Bomba Germen",
			it: "Semebomba",
			pt: "Seed Bomb",
			de: "Samenbomben"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}]
}

export default card
