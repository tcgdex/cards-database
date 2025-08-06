import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [15],
	set: Set,

	name: {
		fr: "Dardargnan",
		en: "Beedrill",
		es: "Beedrill",
		it: "Beedrill",
		pt: "Beedrill",
		de: "Bibor"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Aiguille Nadir",
			en: "Nadir Needle",
			es: "Aguijón Nadir",
			it: "Aculeo Distruttivo",
			pt: "Agulha das Profundezas",
			de: "Nadirnadel"
		},

		effect: {
			fr: "Si vous n'avez aucune carte dans votre main, cette attaque inflige 120 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			en: "If you have no cards in your hand, this attack does 120 more damage, and your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			es: "Si no tienes ninguna carta en tu mano, este ataque hace 120 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
			it: "Se non hai carte in mano, questo attacco infligge 120 danni in più e il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
			pt: "Se você não tiver cartas na sua mão, este ataque causará 120 pontos de dano a mais, e o Pokémon Ativo do seu oponente agora estará Envenenado e Paralisado.",
			de: "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 120 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet."
		},

		damage: "30+"
	}, {
		cost: ["Grass", "Grass"],

		name: {
			fr: "Transpercement",
			en: "Pierce",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "nisimono",

	thirdParty: {
		cardmarket: 733610
	}
}

export default card
