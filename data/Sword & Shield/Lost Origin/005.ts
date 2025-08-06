import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [47],
	set: Set,

	name: {
		en: "Parasect",
		fr: "Parasect",
		es: "Parasect",
		it: "Parasect",
		pt: "Parasect",
		de: "Parasek"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
		es: "Paras",
		it: "Paras",
		pt: "Paras",
		de: "Paras"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lethargy Spores",
			fr: "Spores Soporifiques",
			es: "Esporas Letargo",
			it: "Spore Letargiche",
			pt: "Esporos Letárgicos",
			de: "Trägheitssporen"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may make both Active Pokémon Asleep and Poisoned.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez laisser les deux Pokémon Actifs Endormis et Empoisonnés.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes dejar a ambos Pokémon Activos Dormidos y Envenenados.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lasciare entrambi i Pokémon attivi addormentati e avvelenati.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá deixar ambos os Pokémon Ativos Adormecidos e Envenenados.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du beide Aktive Pokémon einschlafen lassen und vergiften."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "X-Scissor",
			fr: "Plaie Croix",
			es: "Tijera X",
			it: "Forbice X",
			pt: "Tesoura X",
			de: "Kreuzschere"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 50 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 670810,
		tcgplayer: 283868
	}
}

export default card
