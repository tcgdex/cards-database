import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Dhelmise V",
		fr: "Sinistrail V",
		es: "Dhelmise V",
		it: "Dhelmise V",
		pt: "Dhelmise V",
		de: "Moruda V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		731,
	],

	hp: 220,

	types: [
		"Grass",
	],

	stage: "Basic",
	suffix: "V",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Anchor Anger",
				fr: "Colère Ancrée",
				es: "Anclaje Ira",
				it: "Ira d’Ancora",
				pt: "Âncora Furiosa",
				de: "Ankerwut"
			},
			effect: {
				en: "If any of your Grass Pokémon were Knocked Out by damage from an opponent’s attack during their last turn, this attack does 90 more damage.",
				fr: "Si l’un de vos Pokémon Grass a été mis K.O. par les dégâts d’une attaque de votre adversaire lors de son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si alguno de tus Pokémon Grass quedó Fuera de Combate por el daño de un ataque de tu rival durante su último turno, este ataque hace 90 puntos de daño más.",
				it: "Se uno qualsiasi dei tuoi Pokémon Grass è stato messo KO dai danni inflitti da un attacco dell’avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più.",
				pt: "Se algum dos seus Pokémon Grass tiver sido Nocauteado pelo dano de um ataque do seu oponente durante o último turno dele(a), este ataque causará 90 pontos de dano a mais.",
				de: "Wenn mindestens 1 deiner Grass-Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Giga Hammer",
				fr: "Giga Marteau",
				es: "Gigamartillo",
				it: "Gigamartello",
				pt: "Gigamartelo",
				de: "Gigahammer"
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Giga Hammer.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Giga Marteau.",
				es: "Durante tu próximo turno, este Pokémon no puede usar Gigamartillo.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Gigamartello.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá usar Gigamartelo.",
				de: "Während deines nächsten Zuges kann dieses Pokémon Gigahammer nicht einsetzen."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
