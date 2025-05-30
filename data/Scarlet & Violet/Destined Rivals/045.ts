import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Gyarados ex",
		fr: "Léviator-ex",
		de: "Garados-ex",
		it: "Gyarados-ex",
		es: "Gyarados ex",
		pt: "Gyarados ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Waterfall",
			fr: "Cascade",
			de: "Kaskade",
			it: "Cascata",
			es: "Cascada",
			pt: "Cachoeira"
		},

		damage: 100
	}, {
		cost: ["Water", "Water", "Water", "Colorless", "Colorless"],

		name: {
			en: "Tyrannical Tail",
			fr: "Queue Tyrannique",
			de: "Tyrannischer Schweif",
			it: "Coda Tirannica",
			es: "Cola Tiránica",
			pt: "Cauda Tirânica"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 180 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 180 dégâts supplémentaires.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 180 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 180 danni in più.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 180 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 180 pontos de dano a mais."
		},

		damage: "180+"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card