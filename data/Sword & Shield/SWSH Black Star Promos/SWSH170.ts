import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [386],
	set: Set,

	name: {
		fr: "Deoxys",
		de: "Deoxys",
		es: "Deoxys",
		pt: "Deoxys",
		it: "Deoxys",
		en: "Deoxys"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Boost à Photons",
			de: "Photonen-Boost",
			es: "Impulso Fotónico",
			pt: "Impulso de Fótons",
			it: "Carica Fotonica",
			en: "Photon Boost"
		},

		effect: {
			fr: "Si de l'Énergie Poing de Fusion est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon mindestens 1 Fusionsangriff-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			es: "Si este Pokémon tiene alguna Energía Golpe Fusión unida a él, este ataque hace 80 puntos de daño más.",
			pt: "Se este Pokémon tiver alguma Energia Golpe Fusão ligada a ele, este ataque causará 80 pontos de dano a mais.",
			it: "Se questo Pokémon ha delle Energie Colpo Fusione assegnate, questo attacco infligge 80 danni in più.",
			en: "If this Pokémon has any Fusion Strike Energy attached, this attack does 80 more damage."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "DNA from a space virus mutated and became a Pokémon. It appears where auroras are seen."
	}
}

export default card