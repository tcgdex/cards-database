import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu V",
		fr: "Pikachu V",
		es: "Pikachu V",
		it: "Pikachu V",
		pt: "Pikachu V",
		de: "Pikachu V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Lightning Blast",
			fr: "Explosion Électrique",
			es: "Explosión Relámpago",
			it: "Fulmine Esplosivo",
			pt: "Relâmpago Explosivo",
			de: "Blitz-Blaster"
		},

		effect: {
			en: "You may discard all Lightning Energy from this Pokémon. If you do, this attack does 120 more damage.",
			fr: "Vous pouvez défausser toute l'Énergie Lightning de ce Pokémon. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Puedes descartar todas las Energías Lightning de este Pokémon. Si lo haces, este ataque hace 120 puntos de daño más.",
			it: "Puoi scartare tutte le Energie Lightning da questo Pokémon. Se lo fai, questo attacco infligge 120 danni in più.",
			pt: "Você pode descartar todas as Energias Lightning deste Pokémon. Se fizer isto, este ataque causará 120 pontos de dano a mais.",
			de: "Du kannst alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608703,
		tcgplayer: 263876
	}
}

export default card