import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [386],
	set: Set,

	name: {
		'en-us': "Deoxys",
		'fr-fr': "Deoxys",
		'es-es': "Deoxys",
		'it-it': "Deoxys",
		'pt-br': "Deoxys",
		'de-de': "Deoxys"
	},

	illustrator: "Scav",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Photon Boost",
			'fr-fr': "Boost à Photons",
			'es-es': "Impulso Fotónico",
			'it-it': "Carica Fotonica",
			'pt-br': "Impulso de Fótons",
			'de-de': "Photonen-Boost"
		},

		effect: {
			'en-us': "If this Pokémon has any Fusion Strike Energy attached, this attack does 80 more damage.",
			'fr-fr': "Si de l'Énergie Poing de Fusion est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía Golpe Fusión unida a él, este ataque hace 80 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie Colpo Fusione assegnate, questo attacco infligge 80 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia Golpe Fusão ligada a ele, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Fusionsangriff-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
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
		'en-us': "DNA from a space virus mutated and became a Pokémon. It appears where auroras are seen.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691891,
				tcgplayer: 478029
			}
		},
	],
}

export default card
