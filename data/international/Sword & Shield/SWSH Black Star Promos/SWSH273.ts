import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [550],
	set: Set,

	name: {
		'fr-fr': "Bargantua de Hisui",
		'de-de': "Hisui-Barschuft",
		'es-es': "Basculin de Hisui",
		'pt-br': "Basculin de Hisui",
		'it-it': "Basculin di Hisui",
		'en-us': "Hisuian Basculin"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Submersion Silencieuse",
			'de-de': "Leiser Tauchgang",
			'es-es': "Inmersión Silenciosa",
			'pt-br': "Submersão Silenciosa",
			'it-it': "Immersione Silenziosa",
			'en-us': "Submerge Silently"
		},

		effect: {
			'fr-fr': "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			'de-de': "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird.",
			'es-es': "Puedes usar este ataque solo si sales segundo, y solo durante tu primer turno. Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques.",
			'pt-br': "Você só pode usar este ataque se for o segundo a jogar e somente no seu primeiro turno. Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			'it-it': "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			'en-us': "You can use this attack only if you go second, and only during your first turn. During your opponent's next turn, prevent all damage done to this Pokémon by attacks."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso",
			'en-us': "Bite"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	description: {
		'en-us': "Though it differs from other Basculin in several respects, including demeanor—this one is gentle—I have categorized it as a regional form given the vast array of shared qualities."
	},

	thirdParty: {
		cardmarket: 684385
	}
}

export default card
