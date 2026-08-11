import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [481],
	set: Set,

	name: {
		'en-us': "Mesprit",
		'fr-fr': "Créfollet",
		'es-es': "Mesprit",
		'it-it': "Mesprit",
		'pt-br': "Mesprit",
		'de-de': "Vesprit"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Full Heart",
			'fr-fr': "Cœur Plein",
			'es-es': "Todo Corazón",
			'it-it': "Riempicuore",
			'pt-br': "Coração Carregado",
			'de-de': "Erfülltes Herz"
		},

		effect: {
			'en-us': "Attach up to 2 Basic {P} Energy cards from your hand to your Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {P} de base de votre main à vos Pokémon comme il vous plaît.",
			'es-es': "Une hasta 2 cartas de Energía {P} Básica de tu mano a tus Pokémon de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon fino a due carte Energia base {P} dalla tua mano nel modo che preferisci.",
			'pt-br': "Ligue até 2 cartas de Energia {P} Básica da sua mão aos seus Pokémon como desejar.",
			'de-de': "Lege bis zu 2 Basis-{P}-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Guardian Burst",
			'fr-fr': "Explosion Gardienne",
			'es-es': "Explosión del Guardián",
			'it-it': "Raffica dei Guardiani",
			'pt-br': "Explosão dos Guardiões",
			'de-de': "Wächter-Eruption"
		},

		effect: {
			'en-us': "If you don't have Uxie and Azelf on your Bench, this attack does nothing.",
			'fr-fr': "Si vous n'avez pas Créhelf et Créfadet sur votre Banc, cette attaque ne fait rien.",
			'es-es': "Si no tienes a Uxie y Azelf en tu Banca, este ataque no hace nada.",
			'it-it': "Se non hai Uxie e Azelf nella tua panchina, questo attacco non ha effetto.",
			'pt-br': "Se você não tiver Uxie e Azelf no seu Banco, este ataque não fará nada.",
			'de-de': "Wenn sich Selfe und Tobutz nicht auf deiner Bank befinden, hat diese Attacke keine Auswirkungen."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794577,
				tcgplayer: 590003
			}
		},
	],

	illustrator: "HYOGONOSUKE",

}

export default card
