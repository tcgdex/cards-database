import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Toxicroak",
		'fr-fr': "Coatox",
		'es-es': "Toxicroak",
		'it-it': "Toxicroak",
		'pt-br': "Toxicroak",
		'de-de': "Toxiquak"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		454,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Poison Jab",
				'fr-fr': "Direct Toxik",
				'es-es': "Puya Nociva",
				'it-it': "Velenpuntura",
				'pt-br': "Golpe Envenenado",
				'de-de': "Gifthieb"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Exact Revenge",
				'fr-fr': "Vengeance Exigée",
				'es-es': "Exigir Venganza",
				'it-it': "Ora della Vendetta",
				'pt-br': "Dar o Troco",
				'de-de': "Auge um Auge"
			},
			effect: {
				'en-us': "If any of your Fighting Pokémon were Knocked Out by damage from an opponent’s attack during their last turn, this attack does 70 more damage.",
				'fr-fr': "Si l’un de vos Pokémon Fighting a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si alguno de tus Pokémon Fighting quedó Fuera de Combate por el daño de un ataque de tu rival durante su último turno, este ataque hace 70 puntos de daño más.",
				'it-it': "Se uno qualsiasi dei tuoi Pokémon Fighting è stato messo KO dai danni inflitti da un attacco del tuo avversario durante il suo ultimo turno, questo attacco infligge 70 danni in più.",
				'pt-br': "Se algum dos seus Pokémon Fighting tiver sido Nocauteado pelo dano de um ataque do seu oponente durante a última vez dele(a) jogar, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn mindestens 1 deiner Fighting-Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 70 Schadenspunkte mehr zu."
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

	retreat: 2,

	description: {
		'en-us': "Its knuckle claws secrete a toxin so vile that even a scratch could prove fatal.",
	},

	thirdParty: {
		cardmarket: 315987,
		tcgplayer: 157674
	}
}

export default card
