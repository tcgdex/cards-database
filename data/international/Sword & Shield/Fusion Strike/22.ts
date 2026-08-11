import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		'en-us': "Rillaboom V",
		'fr-fr': "Gorythmic V",
		'es-es': "Rillaboom V",
		'it-it': "Rillaboom V",
		'pt-br': "Rillaboom V",
		'de-de': "Gortrom V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Drain Punch",
			'fr-fr': "Vampi-Poing",
			'de-de': "Ableithieb",
			'es-es': "Puño Drenaje",
			'pt-br': "Soco Dreno",
			'it-it': "Assorbipugno"
		},

		damage: 60,

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Drum Rush",
			'fr-fr': "Charge Tambour",
			'de-de': "Trommelansturm",
			'es-es': "Embestida Percusión",
			'pt-br': "Investida de Tambores",
			'it-it': "Raffica di Tamburi"
		},

		damage: 160
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582081,
				tcgplayer: 253113
			}
		},
	],
}

export default card
