import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Sandaconda",
		'fr-fr': "Dunaconda",
		'es-es': "Sandaconda",
		'it-it': "Sandaconda",
		'pt-br': "Sandaconda",
		'de-de': "Sanaconda"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Silicobra",
		'fr-fr': "Dunaja",
		'es-es': "Silicobra",
		'it-it': "Silicobra",
		'pt-br': "Silicobra",
		'de-de': "Salanga"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Coil",
				'fr-fr': "Enroulement",
				'es-es': "Enrosque",
				'it-it': "Arrotola",
				'pt-br': "Enroscar",
				'de-de': "Einrollen"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's attacks do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, les attaques de ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, los ataques de este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante o seu próximo turno, os ataques deste Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügen die Attacken dieses Pokémon dem Aktiven Pokémon deines Gegners 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Skull Bash",
				'fr-fr': "Coud'Krâne",
				'es-es': "Cabezazo",
				'it-it': "Capocciata",
				'pt-br': "Quebra-crânio",
				'de-de': "Schädelwumme"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Its unique style of coiling allows it to blast sand out of its sand sac more efficiently."
	},

	dexId: [844],

	thirdParty: {
		cardmarket: 436664,
		tcgplayer: 208418
	}
}

export default card
