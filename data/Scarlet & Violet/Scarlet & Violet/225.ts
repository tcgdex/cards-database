import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		en: "Gyarados ex",
		fr: "Léviator-ex",
		es: "Gyarados ex",
		it: "Gyarados-ex",
		pt: "Gyarados ex",
		de: "Garados-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],

	evolveFrom: {
		en: "Magikarp"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Waterfall",
			fr: "Cascade",
			es: "Cascada",
			it: "Cascata",
			pt: "Cachoeira",
			de: "Kaskade"
		},

		damage: 100
	}, {
		cost: ["Water", "Water", "Water", "Colorless", "Colorless"],

		name: {
			en: "Tyrannical Tail",
			fr: "Queue Tyrannique",
			es: "Cola Tiránica",
			it: "Coda Tirannica",
			pt: "Cauda Tirânica",
			de: "Tyrannischer Schweif"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 180 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 180 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 180 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 180 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 180 pontos de dano a mais.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 180 Schadenspunkte mehr zu."
		},

		damage: "180+"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card