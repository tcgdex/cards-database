import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [386],
	set: Set,

	name: {
		'fr-fr': "Deoxys",
		'de-de': "Deoxys",
		'es-es': "Deoxys",
		'pt-br': "Deoxys",
		'it-it': "Deoxys",
		'en-us': "Deoxys"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Boost à Photons",
			'de-de': "Photonen-Boost",
			'es-es': "Impulso Fotónico",
			'pt-br': "Impulso de Fótons",
			'it-it': "Carica Fotonica",
			'en-us': "Photon Boost"
		},

		effect: {
			'fr-fr': "Si de l'Énergie Poing de Fusion est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Fusionsangriff-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'es-es': "Si este Pokémon tiene alguna Energía Golpe Fusión unida a él, este ataque hace 80 puntos de daño más.",
			'pt-br': "Se este Pokémon tiver alguma Energia Golpe Fusão ligada a ele, este ataque causará 80 pontos de dano a mais.",
			'it-it': "Se questo Pokémon ha delle Energie Colpo Fusione assegnate, questo attacco infligge 80 danni in più.",
			'en-us': "If this Pokémon has any Fusion Strike Energy attached, this attack does 80 more damage."
		},

		damage: "80+"
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
	regulationMark: "E",

	description: {
		'en-us': "DNA from a space virus mutated and became a Pokémon. It appears where auroras are seen."
	},

	thirdParty: {
		cardmarket: 580167
	}
}

export default card
