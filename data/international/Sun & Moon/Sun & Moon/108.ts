import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Toucannon",
		'fr-fr': "Bazoucan",
		'es-es': "Toucannon",
		'it-it': "Toucannon",
		'pt-br': "Toucannon",
		'de-de': "Tukanon"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		733,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Trumbeak",
		'fr-fr': "Piclairon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Echoed Voice",
				'fr-fr': "Écho",
				'es-es': "Eco Voz",
				'it-it': "Echeggiavoce",
				'pt-br': "Voz Ecoante",
				'de-de': "Widerhall"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon’s Echoed Voice attack does 60 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l’attaque Écho de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Eco Voz de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l’attacco Echeggiavoce di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a sua próxima vez de jogar, o ataque Voz Ecoante deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Widerhall dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Beak Blast",
				'fr-fr': "Bec-Canon",
				'es-es': "Pico Cañón",
				'it-it': "Cannonbecco",
				'pt-br': "Bico Explosivo",
				'de-de': "Schnabelkanone"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Queimado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Within its beak, its internal gas ignites, explosively launching seeds with enough power to pulverize boulders.",
	},

	thirdParty: {
		cardmarket: 295420,
		tcgplayer: 126980
	}
}

export default card
