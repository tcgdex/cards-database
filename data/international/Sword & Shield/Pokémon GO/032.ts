import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [177],
	set: Set,

	name: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'es-es': "Natu",
		'it-it': "Natu",
		'pt-br': "Natu",
		'de-de': "Natu"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Nap",
			'fr-fr': "Tit'Sieste",
			'es-es': "Siesta",
			'it-it': "Pausa",
			'pt-br': "Soneca",
			'de-de': "Nickerchen"
		},

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 20
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
	regulationMark: "F",


	description: {
		'en-us': "It is extremely good at climbing tree trunks and likes to eat the new sprouts on the trees.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665662,
				tcgplayer: 276966
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665662,
				tcgplayer: 276966
			}
		},
	],
}

export default card
