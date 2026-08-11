import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'es-es': "Lombre",
		'it-it': "Lombre",
		'pt-br': "Lombre",
		'de-de': "Lombrero"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		271,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Aqua Lift",
				'fr-fr': "Aqua-Élévation",
				'es-es': "Empuje Acuático",
				'it-it': "Acquapassaggio",
				'pt-br': "Aqua Elevação",
				'de-de': "Aquatransporter"
			},
			effect: {
				'en-us': "If this Pokémon has any Water Energy attached to it, it has no Retreat Cost.",
				'fr-fr': "Si de l’Énergie Water est attachée à ce Pokémon, il n’a pas de Coût de Retraite.",
				'es-es': "Si este Pokémon tiene alguna Energía Water unida a él, no tiene ningún Coste de Retirada.",
				'it-it': "Se questo Pokémon ha delle Energie Water assegnate, non ha costo di ritirata.",
				'pt-br': "Se este Pokémon tiver alguma Energia Water ligada a ele, não terá custo de Recuo.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Water-Energie angelegt ist, hat es keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ambush",
				'fr-fr': "Embuscade",
				'es-es': "Emboscada",
				'it-it': "Imboscata",
				'pt-br': "Emboscada",
				'de-de': "Hinterhalt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a mischievous spirit. If it spots an angler, it will tug on the fishing line to interfere.",
	},

	thirdParty: {
		cardmarket: 361284,
		tcgplayer: 170854
	}
}

export default card
