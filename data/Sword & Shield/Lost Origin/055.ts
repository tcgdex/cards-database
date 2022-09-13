import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Manectric",
		fr: "Élecsprint",
		es: "Manectric",
		it: "Manectric",
		pt: "Manectric",
		de: "Voltenso"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
		es: "Electrike",
		it: "Electrike",
		pt: "Electrike",
		de: "Frizelbliz"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Assault Laser",
			fr: "Laser d'Assaut",
			es: "Láser de Asalto",
			it: "Laserassalto",
			pt: "Laser de Ataque",
			de: "Offensiv-Laser"
		},

		effect: {
			en: "If your opponent's Active Pokémon has a Pokémon Tool attached, this attack does 80 more damage.",
			fr: "Si un Outil Pokémon est attaché au Pokémon Actif de votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival tiene 1 Herramienta Pokémon unida a él, este ataque hace 80 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha una carta Oggetto Pokémon assegnata, questo attacco infligge 80 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente tiver 1 Ferramenta Pokémon ligada a ele, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn an das Aktive Pokémon deines Gegners eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card