import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Qwilfish",
		fr: "Qwilfish",
		es: "Qwilfish",
		it: "Qwilfish",
		pt: "Qwilfish",
		de: "Baldorfish"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		211,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poison Point",
				fr: "Point Poison",
				es: "Punto Tóxico",
				it: "Velenopunto",
				pt: "Ponto Venenoso",
				de: "Giftdorn"
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is damaged by an opponent's attack (even if it is Knocked Out), the Attacking Pokémon is now Poisoned.",
				fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même s'il est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
				es: "Si este Pokémon es tu Pokémon Activo y resulta dañado por el ataque de un rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Envenenado.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo K.O., il Pokémon attaccante viene avvelenato.",
				pt: "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), o Pokémon Atacante será Envenenado.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Venoshock",
				fr: "Choc Venin",
				es: "Carga Tóxica",
				it: "Velenoshock",
				pt: "Venochoque",
				de: "Giftschock"
			},
			effect: {
				en: "If your opponent's Active Pokémon is Poisoned, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "The small spikes covering its body developed from scales. They inject a toxin that causes fainting."
	}
}

export default card
