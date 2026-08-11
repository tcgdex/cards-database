import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu VMAX",
		'fr-fr': "Pikachu VMAX",
		'es-es': "Pikachu VMAX",
		'it-it': "Pikachu VMAX",
		'pt-br': "Pikachu VMAX",
		'de-de': "Pikachu VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Pikachu V",
		'fr-fr': "Pikachu-V",
		'es-es': "Pikachu V",
		'it-it': "Pikachu-V",
		'pt-br': "Pikachu V",
		'de-de': "Pikachu-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'en-us': "G-Max Volt Tackle",
			'fr-fr': "Électacle G-Max",
			'es-es': "Gigaplacaje Eléctrico",
			'it-it': "Gigalocomovolt",
			'pt-br': "Investida Trovão G-Max",
			'de-de': "Giga-Volttackle"
		},

		effect: {
			'en-us': "You may discard all Energy from this Pokémon. If you do, this attack does 150 more damage.",
			'fr-fr': "Vous pouvez défausser toute l'Énergie de ce Pokémon. Dans ce cas, cette attaque inflige 150 dégâts supplémentaires.",
			'es-es': "Puedes descartar todas las Energías de este Pokémon. Si lo haces, este ataque hace 150 puntos de daño más.",
			'it-it': "Puoi scartare tutte le Energie da questo Pokémon. Se lo fai, questo attacco infligge 150 danni in più.",
			'pt-br': "Você pode descartar todas as Energias deste Pokémon. Se fizer isto, este ataque causará 150 pontos de dano a mais.",
			'de-de': "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 2,
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 674244,
				tcgplayer: 284302
			}
		},
	],
}

export default card
