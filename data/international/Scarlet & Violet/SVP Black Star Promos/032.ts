import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [979],
	set: Set,

	name: {
		'en-us': "Annihilape ex",
		'fr-fr': "Courrousinge-ex",
		'es-es': "Annihilape ex",
		'it-it': "Annihilape-ex",
		'pt-br': "Annihilape ex",
		'de-de': "Epitaff-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'es-es': "Primeape",
		'it-it': "Primeape",
		'pt-br': "Primeape",
		'de-de': "Rasaff"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Angry Grudge",
			'fr-fr': "Rancune Rageuse",
			'es-es': "Rabia Iracunda",
			'it-it': "Rancorfurioso",
			'pt-br': "Rancor Guardado",
			'de-de': "Böses Nachspiel"
		},

		effect: {
			'en-us': "Put up to 12 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way.",
			'fr-fr': "Placez jusqu'à 12 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé de cette façon.",
			'es-es': "Pon hasta 12 contadores de daño en este Pokémon. Este ataque hace 20 puntos de daño por cada contador de daño que hayas colocado de esta manera.",
			'it-it': "Metti fino a 12 segnalini danno su questo Pokémon. Questo attacco infligge 20 danni per ogni segnalino danno che hai messo in questo modo.",
			'pt-br': "Coloque até 12 contadores de dano neste Pokémon. Este ataque causa 20 pontos de dano para cada contador de dano colocado desta forma.",
			'de-de': "Lege bis zu 12 Schadensmarken auf dieses Pokémon. Diese Attacke fügt für jede auf diese Weise platzierte Schadensmarke 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Seismic Toss",
			'fr-fr': "Frappe Atlas",
			'es-es': "Sísmico",
			'it-it': "Movimento Sismico",
			'pt-br': "Arremesso Sísmico",
			'de-de': "Geowurf"
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "PLANETA Hiiragi",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 709541,
				tcgplayer: 502981
			},
		}
	],
}

export default card
