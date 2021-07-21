import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Toxicroak",
		fr: "Coatox",
		es: "Toxicroak",
		it: "Toxicroak",
		pt: "Toxicroak",
		de: "Toxiquak"
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
		en: "Croagunk",
		fr: "Cradopaud",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
				es: "Puya Nociva",
				it: "Velenpuntura",
				pt: "Golpe Envenenado",
				de: "Gifthieb"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Exact Revenge",
				fr: "Vengeance Exigée",
				es: "Exigir Venganza",
				it: "Ora della Vendetta",
				pt: "Dar o Troco",
				de: "Auge um Auge"
			},
			effect: {
				en: "If any of your Fighting Pokémon were Knocked Out by damage from an opponent’s attack during their last turn, this attack does 70 more damage.",
				fr: "Si l’un de vos Pokémon Fighting a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si alguno de tus Pokémon Fighting quedó Fuera de Combate por el daño de un ataque de tu rival durante su último turno, este ataque hace 70 puntos de daño más.",
				it: "Se uno qualsiasi dei tuoi Pokémon Fighting è stato messo KO dai danni inflitti da un attacco del tuo avversario durante il suo ultimo turno, questo attacco infligge 70 danni in più.",
				pt: "Se algum dos seus Pokémon Fighting tiver sido Nocauteado pelo dano de um ataque do seu oponente durante a última vez dele(a) jogar, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn mindestens 1 deiner Fighting-Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 70 Schadenspunkte mehr zu."
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



}

export default card
