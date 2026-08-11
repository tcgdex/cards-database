import { Card } from "models/database/card"
import Set from "../Fusion Strike"

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

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
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
	illustrator: "Kouki Saitou",

	description: {
		'en-us': "DNA from a space virus mutated and became a Pokémon. It appears where auroras are seen."
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Photon Boost",
			'fr-fr': "Boost à Photons",
			'de-de': "Photonen-Boost",
			'es-es': "Impulso Fotónico",
			'pt-br': "Impulso de Fótons",
			'it-it': "Carica Fotonica"
		},

		damage: "80+",

		effect: {
			'en-us': "If this Pokémon has any Fusion Strike Energy attached, this attack does 80 more damage.",
			'fr-fr': "Si de l'Énergie Poing de Fusion est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Fusionsangriff-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'es-es': "Si este Pokémon tiene alguna Energía Golpe Fusión unida a él, este ataque hace 80 puntos de daño más.",
			'pt-br': "Se este Pokémon tiver alguma Energia Golpe Fusão ligada a ele, este ataque causará 80 pontos de dano a mais.",
			'it-it': "Se questo Pokémon ha delle Energie Colpo Fusione assegnate, questo attacco infligge 80 danni in più."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582638,
				tcgplayer: 253293
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582638,
				tcgplayer: 253293
			}
		},
	],
}

export default card
