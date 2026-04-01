import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
		es: "Hawlucha",
		'es-mx': "Hawlucha",
		de: "Resladero",
		it: "Hawlucha",
		pt: "Hawlucha"
	},

	illustrator: "osare",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Vengeful Kick",
			fr: "Coup de Pied Vengeur",
			es: "Patada Vengativa",
			'es-mx': "Patada Vengativa",
			de: "Rachekick",
			it: "Calcio Vendicativo",
			pt: "Chute Vingativo"
		},

		effect: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 60 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 60 puntos de daño más.",
			'es-mx': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 60 puntos de daño más.",
			de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			it: "Se i Pokémon nella tua panchina hanno dei segnalini danno, questo attacco infligge 60 danni in più.",
			pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 60 pontos de dano a mais."
		},

		damage: "30+"
	}],

	retreat: 0,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684428,
		cardmarket: 877460
	}
}

export default card