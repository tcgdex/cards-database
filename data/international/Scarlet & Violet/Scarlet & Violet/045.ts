import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		'en-us': "Gyarados ex",
		'fr-fr': "Léviator-ex",
		'es-es': "Gyarados ex",
		'it-it': "Gyarados-ex",
		'pt-br': "Gyarados ex",
		'de-de': "Garados-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			'en-us': "Waterfall",
			'fr-fr': "Cascade",
			'es-es': "Cascada",
			'it-it': "Cascata",
			'pt-br': "Cachoeira",
			'de-de': "Kaskade"
		},

		damage: 100
	}, {
		cost: ["Water", "Water", "Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Tyrannical Tail",
			'fr-fr': "Queue Tyrannique",
			'es-es': "Cola Tiránica",
			'it-it': "Coda Tirannica",
			'pt-br': "Cauda Tirânica",
			'de-de': "Tyrannischer Schweif"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 180 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 180 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 180 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 180 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 180 pontos de dano a mais.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 180 Schadenspunkte mehr zu."
		},

		damage: "180+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	description: {
		'en-us': "An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.",
	},

	thirdParty: {
        cardmarket: 702340,
        tcgplayer: 487889
    }
}

export default card