import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [223],
	set: Set,

	name: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
		'es-es': "Remoraid",
		'de-de': "Remoraid",
		'it-it': "Remoraid",
		'pt-br': "Remoraid",
		'es-mx': "Remoraid"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Flail",
			'fr-fr': "Gigotage",
			'es-es': "Azote",
			'de-de': "Dreschflegel",
			'it-it': "Flagello",
			'pt-br': "Mangual",
			'es-mx': "Azote"
		},

		effect: {
			'en-us': "This attack does 10 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano para cada contador de dano neste Pokémon.",
			'es-mx': "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon."
		},

		damage: "10×"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'de-de': "Regenplatscher",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante",
			'es-mx': "Salpicalluvia"
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
	regulationMark: "I",
	illustrator: "Minahamu",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817185,
				tcgplayer: 623460
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817185,
				tcgplayer: 623460
			}
		},
	],
}

export default card
