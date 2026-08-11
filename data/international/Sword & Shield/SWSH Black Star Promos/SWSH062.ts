import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [25],
	set: Set,
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		'en-us': "Pikachu VMAX",
		'fr-fr': "Pikachu VMAX",
		'de-de': "Pikachu VMAX",
		'es-es': "Pikachu VMAX",
		'pt-br': "Pikachu VMAX",
		'it-it': "Pikachu VMAX"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "VMAX",

	evolveFrom: {
		'fr-fr': "Pikachu-V",
		'de-de': "Pikachu-V",
		'es-es': "Pikachu V",
		'pt-br': "Pikachu V",
		'it-it': "Pikachu-V",
		'en-us': "Pikachu V"
	},

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'fr-fr': "Électacle G-Max",
			'de-de': "Giga-Volttackle",
			'es-es': "Gigaplacaje Eléctrico",
			'pt-br': "Investida Trovão G-Max",
			'it-it': "Gigalocomovolt",
			'en-us': "G-Max Volt Tackle"
		},

		effect: {
			'fr-fr': "Vous pouvez défausser toute l'Énergie de ce Pokémon. Dans ce cas, cette attaque inflige 150 dégâts supplémentaires.",
			'de-de': "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 150 Schadenspunkte mehr zu.",
			'es-es': "Puedes descartar todas las Energías de este Pokémon. Si lo haces, este ataque hace 150 puntos de daño más.",
			'pt-br': "Você pode descartar todas as Energias deste Pokémon. Se fizer isto, este ataque causará 150 pontos de dano a mais.",
			'it-it': "Puoi scartare tutte le Energie da questo Pokémon. Se lo fai, questo attacco infligge 150 danni in più.",
			'en-us': "You may discard all Energy from this Pokémon. If you do, this attack does 150 more damage."
		},

		damage: "120+"
	}],

	retreat: 2,
	regulationMark: "D",

	thirdParty: {
		cardmarket: 576730
	}
}

export default card
