import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [663],
	set: Set,

	name: {
		fr: "Flambusard",
		en: "Talonflame",
		es: "Talonflame",
		it: "Talonflame",
		pt: "Talonflame",
		de: "Fiaro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Serre",
			en: "Clutch",
			es: "Embrague",
			it: "Grinfie",
			pt: "Agarramento",
			de: "Greifer"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 50
	}, {
		cost: ["Fire"],

		name: {
			fr: "Brise Incandescente",
			en: "Fiery Breeze",
			es: "Brisa Ígnea",
			it: "Brezza Incandescente",
			pt: "Brisa Chamuscante",
			de: "Feurige Brise"
		},

		effect: {
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 90 dégâts supplémentaires.",
			en: "If this Pokémon has any damage counters on it, this attack does 90 more damage.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 90 puntos de daño más.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card