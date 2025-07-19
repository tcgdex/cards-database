import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Stunfisk",
		fr: "Limonde",
		de: "Flunschlik",
		it: "Stunfisk",
		pt: "Stunfisk",
		es: "Stunfisk",
		'es-mx': "Stunfisk"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Muddy Bolt",
			fr: "Éclair Boueux",
			de: "Schlammblitz",
			it: "Fangofulmine",
			pt: "Raio Lamacento",
			es: "Rayo Lodoso",
			'es-mx': "Rayo Lodoso"
		},

		effect: {
			en: "If this Pokémon has any {F} Energy attached, this attack does 20 more damage.",
			fr: "Si au moins une Énergie {F} est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon mindestens 1 {F}-Energie angelegt ist, fügt diese Attacke 20 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha delle Energie {F} assegnate, questo attacco infligge 20 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia {F} ligada a ele, este ataque causará 20 pontos de dano a mais.",
			es: "Si este Pokémon tiene alguna Energía {F} unida, este ataque hace 20 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene alguna Energía {F} unida, este ataque hace 20 puntos de daño más."
		},

		damage: "20+"
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Flop",
			fr: "Flop",
			de: "Plumps",
			it: "Tonfo",
			pt: "Baque",
			es: "Vuelta",
			'es-mx': "Desplome"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card