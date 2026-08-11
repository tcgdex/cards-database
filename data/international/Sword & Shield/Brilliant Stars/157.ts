import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu V",
		'fr-fr': "Pikachu V",
		'es-es': "Pikachu V",
		'it-it': "Pikachu V",
		'pt-br': "Pikachu V",
		'de-de': "Pikachu V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Lightning Blast",
			'fr-fr': "Explosion Électrique",
			'es-es': "Explosión Relámpago",
			'it-it': "Fulmine Esplosivo",
			'pt-br': "Relâmpago Explosivo",
			'de-de': "Blitz-Blaster"
		},

		effect: {
			'en-us': "You may discard all Lightning Energy from this Pokémon. If you do, this attack does 120 more damage.",
			'fr-fr': "Vous pouvez défausser toute l'Énergie Lightning de ce Pokémon. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Puedes descartar todas las Energías Lightning de este Pokémon. Si lo haces, este ataque hace 120 puntos de daño más.",
			'it-it': "Puoi scartare tutte le Energie Lightning da questo Pokémon. Se lo fai, questo attacco infligge 120 danni in più.",
			'pt-br': "Você pode descartar todas as Energias Lightning deste Pokémon. Se fizer isto, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Du kannst alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 120 Schadenspunkte mehr zu."
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


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608703,
				tcgplayer: 263876
			}
		},
	],
}

export default card
