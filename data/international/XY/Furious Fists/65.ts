import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Drapion",
		'fr-fr': "Drascore",
		'es-es': "Drapion",
		'it-it': "Drapion",
		'pt-br': "Drapion",
		'de-de': "Piondragi"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		452,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Skorupi",
		'fr-fr': "Rapion",
		'es-es': "Skorupi",
		'it-it': "Skorupi",
		'pt-br': "Skorupi",
		'de-de': "Pionskora"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
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
				'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 40 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 40 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 40 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, esse ataque causará 40 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Venomous Fang",
				'fr-fr': "Croc-Poison",
				'es-es': "Colmillo Nocivo",
				'it-it': "Dentevelenoso",
				'pt-br': "Dente Venenoso",
				'de-de': "Gifthauer"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It takes great pride in its strength. Even though it can tear foes apart, it finishes them off with powerful poison.",
	},

	thirdParty: {
		cardmarket: 281729,
		tcgplayer: 92242
	}
}

export default card
