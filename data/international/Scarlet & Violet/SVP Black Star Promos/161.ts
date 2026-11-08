import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		'en-us': "Charizard ex",
		'fr-fr': "Dracaufeu-ex",
		'es-es': "Charizard ex",
		'it-it': "Charizard-ex",
		'pt-br': "Charizard ex",
		'de-de': "Glurak-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
		'de-de': "Glutexo"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Brave Wing",
			'fr-fr': "Aile de Bravoure",
			'es-es': "Ala Osada",
			'it-it': "Ala Impavida",
			'pt-br': "Asa Intrépida",
			'de-de': "Tapfere Flügel"
		},

		effect: {
			'en-us': "If this Pokémon has any damage counters on it, this attack does 100 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 100 danni in più.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}, {
		cost: ["Fire", "Fire", "Fire", "Fire"],

		name: {
			'en-us': "Explosive Vortex",
			'fr-fr': "Vortex Explosif",
			'es-es': "Vórtice Explosivo",
			'it-it': "Vortice Esplosivo",
			'pt-br': "Vórtice Explosivo",
			'de-de': "Explosiver Wirbel"
		},

		effect: {
			'en-us': "Discard 3 Energy from this Pokémon.",
			'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
			'es-es': "Descarta 3 Energías de este Pokémon.",
			'it-it': "Scarta tre Energie da questo Pokémon.",
			'pt-br': "Descarte 3 Energias deste Pokémon.",
			'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 330
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "PLANETA Mochizuki",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 791830,
				tcgplayer: 586831
			},
		}
	],
}

export default card
