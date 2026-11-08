import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'es-es': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini",
		'de-de': "Dratini"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

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
				'en-us': "Jump On",
				'fr-fr': "Saut",
				'es-es': "Asaltar",
				'it-it': "Salta Su",
				'pt-br': "Pular em Cima",
				'de-de': "Draufspringen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It's still weak, so it lurks on the floor of bodies of water, eating whatever food sinks down and living a quiet life.",
	},

	thirdParty: {
		cardmarket: 388527,
		tcgplayer: 195143
	}
}

export default card
