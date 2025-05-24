import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Pikachu V",
		de: "Pikachu V",
		es: "Pikachu V",
		pt: "Pikachu V",
		it: "Pikachu V",
		en: "Pikachu V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Explosion Électrique",
			de: "Blitz-Blaster",
			es: "Explosión Relámpago",
			pt: "Relâmpago Explosivo",
			it: "Fulmine Esplosivo",
			en: "Lightning Blast"
		},

		effect: {
			fr: "Vous pouvez défausser toute l'Énergie {L} de ce Pokémon. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires.",
			de: "Du kannst alle {L}-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			es: "Puedes descartar todas las Energías {L} de este Pokémon. Si lo haces, este ataque hace 120 puntos de daño más.",
			pt: "Você pode descartar todas as Energias {L} deste Pokémon. Se fizer isto, este ataque causará 120 pontos de dano a mais.",
			it: "Puoi scartare tutte le Energie {L} da questo Pokémon. Se lo fai, questo attacco infligge 120 danni in più.",
			en: "You may discard all {L} Energy from this Pokémon. If you do, this attack does 120 more damage."
		},

		damage: "100+"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card