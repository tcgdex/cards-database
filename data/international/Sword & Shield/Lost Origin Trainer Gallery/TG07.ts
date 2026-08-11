import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [354],
	set: Set,

	name: {
		'en-us': "Banette",
		'fr-fr': "Branette",
		'es-es': "Banette",
		'it-it': "Banette",
		'pt-br': "Banette",
		'de-de': "Banette"
	},

	illustrator: "Tomomi Kaneko",
	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet",
		'de-de': "Shuppet"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Resolute Spite",
			'fr-fr': "Mépris Inflexible",
			'es-es': "Rencor Audaz",
			'it-it': "Dispetto Risoluto",
			'pt-br': "Rancor Resoluto",
			'de-de': "Resoluter Groll"
		},

		effect: {
			'en-us': "Put up to 7 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way.",
			'fr-fr': "Placez jusqu'à 7 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé de cette façon.",
			'es-es': "Pon hasta 7 contadores de daño en este Pokémon. Este ataque hace 20 puntos de daño por cada contador de daño que hayas colocado de esta manera.",
			'it-it': "Metti fino a sette segnalini danno su questo Pokémon. Questo attacco infligge 20 danni per ogni segnalino danno che hai messo in questo modo.",
			'pt-br': "Coloque até 7 contadores de dano neste Pokémon. Este ataque causa 20 pontos de dano para cada contador de dano colocado desta forma.",
			'de-de': "Lege bis zu 7 Schadensmarken auf dieses Pokémon. Diese Attacke fügt für jede auf diese Weise platzierte Schadensmarke 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Eerie Light",
			'fr-fr': "Lumière Étrange",
			'es-es': "Luz Lúgubre",
			'it-it': "Luci Inquietanti",
			'pt-br': "Luz Misteriosa",
			'de-de': "Gespenstisches Licht"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674227,
				tcgplayer: 284267
			}
		},
	],
}

export default card
