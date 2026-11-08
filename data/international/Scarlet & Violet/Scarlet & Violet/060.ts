import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [975],
	set: Set,

	name: {
		'en-us': "Cetitan",
		'fr-fr': "Balbalèze",
		'es-es': "Cetitan",
		'it-it': "Cetitan",
		'pt-br': "Cetitan",
		'de-de': "Kolowal"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Cetoddle",
		'fr-fr': "Piétacé"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 50
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Sweeping Tackle",
			'fr-fr': "Charge Balayante",
			'es-es': "Placaje Barrido",
			'it-it': "Spazzazione",
			'pt-br': "Investida Esmagadora",
			'de-de': "Fege-Tackle"
		},

		effect: {
			'en-us': "This attack does 20 less damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño menos por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 20 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a menos para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte weniger zu."
		},

		damage: "200-"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Anesaki Dynamic",

	description: {
		'en-us': "Ice energy builds up in the horn on its upper jaw, causing the horn to reach cryogenic temperatures that freeze its surroundings.",
	},

	thirdParty: {
        cardmarket: 702355,
        tcgplayer: 487912
    }
}

export default card