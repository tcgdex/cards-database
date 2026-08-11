import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Beartic",
		'fr-fr': "Polagriffe",
		'es-es': "Beartic",
		'it-it': "Beartic",
		'pt-br': "Beartic",
		'de-de': "Siberio"
	},

	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		614,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Cubchoo",
		'fr-fr': "Polarhume",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Resolute Claws",
				'fr-fr': "Griffes Résolues",
				'es-es': "Garras Resueltas",
				'it-it': "Artigli Saldi",
				'pt-br': "Garras Resolutas",
				'de-de': "Resolute Klauen"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 60 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-GX o un Pokémon-EX, este ataque hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-GX o un Pokémon-EX, questo attacco infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-GX ou um Pokémon-EX, este ataque causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-GX oder ein Pokémon-EX ist, fügt diese Attacke 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: "60+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blizzard Burn",
				'fr-fr': "Blizzard Étourdissant",
				'es-es': "Quemadura de Hielo",
				'it-it': "Pirobora",
				'pt-br': "Queimadura de Neve",
				'de-de': "Blizzardbrand"
			},
			effect: {
				'en-us': "This Pokémon can’t attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It freezes its breath to create fangs and claws of ice to fight with. Cold northern areas are its habitat.",
	},

	thirdParty: {
		cardmarket: 365700,
		tcgplayer: 178871
	}
}

export default card
