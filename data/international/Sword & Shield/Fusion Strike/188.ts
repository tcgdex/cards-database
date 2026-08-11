import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [808],
	set: Set,

	name: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'pt-br': "Meltan",
		'de-de': "Meltan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Teeziro",

	description: {
		'en-us': "It melts particles of iron and other metals found in the subsoil, so it can absorb them into its body of molten steel."
	},

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Iron Intake",
			'fr-fr': "Apport en Fer",
			'de-de': "Eisenaufnahme",
			'es-es': "Ingesta de Hierro",
			'pt-br': "Ingestão de Ferro",
			'it-it': "Fabbisogno di Ferro"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'de-de': "Kopfnuss",
			'es-es': "Golpe Cabeza",
			'pt-br': "Cabeçada",
			'it-it': "Bottintesta"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582819,
				tcgplayer: 253338
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582819,
				tcgplayer: 253338
			}
		},
	],
}

export default card
