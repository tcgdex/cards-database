import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [550],
	set: Set,

	name: {
		fr: "Bargantua de Hisui",
		de: "Hisui-Barschuft",
		es: "Basculin de Hisui",
		pt: "Basculin de Hisui",
		it: "Basculin di Hisui",
		en: "Hisuian Basculin"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Submersion Silencieuse",
			de: "Leiser Tauchgang",
			es: "Inmersión Silenciosa",
			pt: "Submersão Silenciosa",
			it: "Immersione Silenziosa",
			en: "Submerge Silently"
		},

		effect: {
			fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			de: "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird.",
			es: "Puedes usar este ataque solo si sales segundo, y solo durante tu primer turno. Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques.",
			pt: "Você só pode usar este ataque se for o segundo a jogar e somente no seu primeiro turno. Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			it: "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			en: "You can use this attack only if you go second, and only during your first turn. During your opponent's next turn, prevent all damage done to this Pokémon by attacks."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Morsure",
			de: "Biss",
			es: "Mordisco",
			pt: "Mordida",
			it: "Morso",
			en: "Bite"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "Though it differs from other Basculin in several respects, including demeanor—this one is gentle—I have categorized it as a regional form given the vast array of shared qualities."
	},

	thirdParty: {
		cardmarket: 684385
	}
}

export default card