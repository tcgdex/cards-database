import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Toxapex",
		'fr-fr': "Prédastérie",
		'es-es': "Toxapex",
		'it-it': "Toxapex",
		'pt-br': "Toxapex",
		'de-de': "Aggrostella"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		748,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Mareanie",
		'fr-fr': "Vorastérie",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Toxic Spikes",
				'fr-fr': "Pics Toxik",
				'es-es': "Púas Tóxicas",
				'it-it': "Fielepunte",
				'pt-br': "Espinhos Tóxicos",
				'de-de': "Giftspitzen"
			},
			effect: {
				'en-us': "Whenever your opponent’s Active Pokémon retreats, their new Active Pokémon is Poisoned.",
				'fr-fr': "Lorsque le Pokémon Actif de votre adversaire bat en retraite, son nouveau Pokémon Actif est Empoisonné.",
				'es-es': "Cada vez que el Pokémon Activo de tu rival se retire, su nuevo Pokémon Activo pasa a estar Envenenado.",
				'it-it': "Ogni volta che il Pokémon attivo del tuo avversario si ritira, il suo nuovo Pokémon attivo viene avvelenato.",
				'pt-br': "Sempre que o Pokémon Ativo do seu oponente recuar, o novo Pokémon Ativo dele(a) será Envenenado.",
				'de-de': "Jedes Mal, wenn sich das Aktive Pokémon deines Gegners zurückzieht, ist sein neues Aktives Pokémon vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Venoshock",
				'fr-fr': "Choc Venin",
				'es-es': "Carga Tóxica",
				'it-it': "Velenoshock",
				'pt-br': "Venochoque",
				'de-de': "Giftschock"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is Poisoned, this attack does 50 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 50 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 50 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Toxapex crawls along the ocean floor on its 12 legs. It leaves a trail of Corsola bits scattered in its wake.",
	},

	thirdParty: {
		cardmarket: 295374,
		tcgplayer: 126934
	}
}

export default card
