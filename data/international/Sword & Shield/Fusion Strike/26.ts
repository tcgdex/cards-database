import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [842],
	set: Set,

	name: {
		'en-us': "Appletun V",
		'fr-fr': "Dratatin V",
		'es-es': "Appletun V",
		'it-it': "Appletun V",
		'pt-br': "Appletun V",
		'de-de': "Schlapfel V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "aky CG Works",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'de-de': "Kopfnuss",
			'es-es': "Golpe Cabeza",
			'pt-br': "Cabeçada",
			'it-it': "Bottintesta"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Sweet Impact",
			'fr-fr': "Impact Douceur",
			'de-de': "Süßer Einschlag",
			'es-es': "Dulce Impacto",
			'pt-br': "Impacto Doce",
			'it-it': "Impatto Dolce"
		},

		damage: 100,

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582095,
				tcgplayer: 253120
			}
		},
	],
}

export default card
