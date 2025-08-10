import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [975],
	set: Set,

	name: {
		fr: "Balbalèze",
		en: "Cetitan",
		es: "Cetitan",
		it: "Cetitan",
		pt: "Cetitan",
		de: "Kolowal"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			fr: "Missile Stalactite",
			en: "Icicle Missile",
			es: "Misil Carámbano",
			it: "Missilghiaccio",
			pt: "Míssil Gélido",
			de: "Eiszapfenrakete"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Corne Spéciale",
			en: "Special Horn",
			es: "Cornamenta Especial",
			it: "Corno Speciale",
			pt: "Chifre Especial",
			de: "Spezielles Horn"
		},

		effect: {
			fr: "Si au moins une Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 140 dégâts supplémentaires.",
			en: "If this Pokémon has any Special Energy attached, this attack does 140 more damage.",
			es: "Si este Pokémon tiene alguna Energía Especial unida, este ataque hace 140 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 140 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 140 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 140 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Pani Kobayashi"
}

export default card