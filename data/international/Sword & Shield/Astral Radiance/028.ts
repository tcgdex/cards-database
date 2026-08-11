import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [54],
	set: Set,

	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
		'de-de': "Enton"
	},

	illustrator: "GOSSAN",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spacing Out",
			'fr-fr': "Trou d'Mémoire",
			'es-es': "En las Nubes",
			'it-it': "Vuoto Mentale",
			'pt-br': "Sonhando Acordado",
			'de-de': "Dahindöser"
		},

		effect: {
			'en-us': "Flip a coin. If heads, heal 10 damage from this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, soignez 10 dégâts de ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, cura 10 puntos de daño a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, cura questo Pokémon da 10 danni.",
			'pt-br': "Jogue 1 moeda. Se sair cara, cure 10 pontos de dano deste Pokémon.",
			'de-de': "Wirf 1 Münze. Heile bei Kopf 10 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Suffers perpetual headaches. If the agony grows too great, Psyduck's latent power erupts, contrary to Psyduck's intent. Ergo, I am exploring ways to ease the pain.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658533,
				tcgplayer: 272228
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658533,
				tcgplayer: 272228
			}
		},
	],
}

export default card
