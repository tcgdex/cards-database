import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'fr-fr': "Pikachu V",
		'de-de': "Pikachu V",
		'es-es': "Pikachu V",
		'pt-br': "Pikachu V",
		'it-it': "Pikachu V",
		'en-us': "Pikachu V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Explosion Électrique",
			'de-de': "Blitz-Blaster",
			'es-es': "Explosión Relámpago",
			'pt-br': "Relâmpago Explosivo",
			'it-it': "Fulmine Esplosivo",
			'en-us': "Lightning Blast"
		},

		effect: {
			'fr-fr': "Vous pouvez défausser toute l'Énergie {L} de ce Pokémon. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires.",
			'de-de': "Du kannst alle {L}-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'es-es': "Puedes descartar todas las Energías {L} de este Pokémon. Si lo haces, este ataque hace 120 puntos de daño más.",
			'pt-br': "Você pode descartar todas as Energias {L} deste Pokémon. Se fizer isto, este ataque causará 120 pontos de dano a mais.",
			'it-it': "Puoi scartare tutte le Energie {L} da questo Pokémon. Se lo fai, questo attacco infligge 120 danni in più.",
			'en-us': "You may discard all {L} Energy from this Pokémon. If you do, this attack does 120 more damage."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 461594
	}
}

export default card
