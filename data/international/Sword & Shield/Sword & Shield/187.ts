import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Dhelmise V",
		'fr-fr': "Sinistrail V",
		'es-es': "Dhelmise V",
		'it-it': "Dhelmise V",
		'pt-br': "Dhelmise V",
		'de-de': "Moruda V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Anchor Anger",
				'fr-fr': "Colère Ancrée",
				'es-es': "Anclaje Ira",
				'it-it': "Ira d'Ancora",
				'pt-br': "Âncora Furiosa",
				'de-de': "Ankerwut"
			},
			effect: {
				'en-us': "If any of your Grass Pokémon were Knocked Out by damage from an opponent's attack during their last turn, this attack does 90 more damage.",
				'fr-fr': "Si l'un de vos Pokémon Grass a été mis K.O. par les dégâts d'une attaque de votre adversaire lors de son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si alguno de tus Pokémon Grass quedó Fuera de Combate por el daño de un ataque de tu rival durante su último turno, este ataque hace 90 puntos de daño más.",
				'it-it': "Se uno qualsiasi dei tuoi Pokémon Grass è stato messo KO dai danni inflitti da un attacco dell'avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più.",
				'pt-br': "Se algum dos seus Pokémon Grass tiver sido Nocauteado pelo dano de um ataque do seu oponente durante o último turno dele(a), este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn mindestens 1 deiner Grass-Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
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
				'en-us': "Giga Hammer",
				'fr-fr': "Giga Marteau",
				'es-es': "Gigamartillo",
				'it-it': "Gigamartello",
				'pt-br': "Gigamartelo",
				'de-de': "Gigahammer"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't use Giga Hammer.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Giga Marteau.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede usar Gigamartillo.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Gigamartello.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Gigamartelo.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon Gigahammer nicht einsetzen."
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
	},

	stage: "Basic",
	suffix: "V",
	dexId: [781],

	thirdParty: {
		cardmarket: 437029,
		tcgplayer: 208385
	}
}

export default card
