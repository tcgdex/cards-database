import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [481],
	set: Set,

	name: {
		en: "Mesprit",
		fr: "Créfollet",
		es: "Mesprit",
		it: "Mesprit",
		pt: "Mesprit",
		de: "Vesprit"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Full Heart",
			fr: "Cœur Plein",
			es: "Todo Corazón",
			it: "Riempicuore",
			pt: "Coração Carregado",
			de: "Erfülltes Herz"
		},

		effect: {
			en: "Attach up to 2 Basic {P} Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Attachez jusqu'à 2 cartes Énergie {P} de base de votre main à vos Pokémon comme il vous plaît.",
			es: "Une hasta 2 cartas de Energía {P} Básica de tu mano a tus Pokémon de la manera que desees.",
			it: "Assegna ai tuoi Pokémon fino a due carte Energia base {P} dalla tua mano nel modo che preferisci.",
			pt: "Ligue até 2 cartas de Energia {P} Básica da sua mão aos seus Pokémon como desejar.",
			de: "Lege bis zu 2 Basis-{P}-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Guardian Burst",
			fr: "Explosion Gardienne",
			es: "Explosión del Guardián",
			it: "Raffica dei Guardiani",
			pt: "Explosão dos Guardiões",
			de: "Wächter-Eruption"
		},

		effect: {
			en: "If you don't have Uxie and Azelf on your Bench, this attack does nothing.",
			fr: "Si vous n'avez pas Créhelf et Créfadet sur votre Banc, cette attaque ne fait rien.",
			es: "Si no tienes a Uxie y Azelf en tu Banca, este ataque no hace nada.",
			it: "Se non hai Uxie e Azelf nella tua panchina, questo attacco non ha effetto.",
			pt: "Se você não tiver Uxie e Azelf no seu Banco, este ataque não fará nada.",
			de: "Wenn sich Selfe und Tobutz nicht auf deiner Bank befinden, hat diese Attacke keine Auswirkungen."
		},

		damage: 160
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "HYOGONOSUKE"
}

export default card
