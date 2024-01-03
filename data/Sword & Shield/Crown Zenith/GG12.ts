import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Deoxys",
		fr: "Deoxys",
		es: "Deoxys",
		it: "Deoxys",
		pt: "Deoxys",
		de: "Deoxys"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Photon Boost",
			fr: "Boost à Photons",
			es: "Impulso Fotónico",
			it: "Carica Fotonica",
			pt: "Impulso de Fótons",
			de: "Photonen-Boost"
		},

		effect: {
			en: "If this Pokémon has any Fusion Strike Energy attached, this attack does 80 more damage.",
			fr: "Si de l'Énergie Poing de Fusion est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía Golpe Fusión unida a él, este ataque hace 80 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie Colpo Fusione assegnate, questo attacco infligge 80 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Golpe Fusão ligada a ele, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 Fusionsangriff-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card