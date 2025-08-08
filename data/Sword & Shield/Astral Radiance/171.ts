import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [68],
	set: Set,

	name: {
		en: "Machamp V",
		fr: "Mackogneur V",
		es: "Machamp V",
		it: "Machamp V",
		pt: "Machamp V",
		de: "Machomei V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Revenge Buster",
			fr: "Buster Vengeur",
			es: "Venganza Destructora",
			it: "Vendetta Distruttiva",
			pt: "Vingança Aniquiladora",
			de: "Vergeltungsschlag"
		},

		effect: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 50 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 50 dégâts supplémentaires.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 50 puntos de daño más.",
			it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 50 danni in più.",
			pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 50 pontos de dano a mais.",
			de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Seismic Toss",
			fr: "Frappe Atlas",
			es: "Sísmico",
			it: "Movimento Sismico",
			pt: "Arremesso Sísmico",
			de: "Geowurf"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card