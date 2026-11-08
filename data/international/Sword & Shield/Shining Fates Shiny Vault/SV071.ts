import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [844],
	set: Set,

	name: {
		'fr-fr': "Dunaconda",
		'en-us': "Sandaconda",
		'es-es': "Sandaconda",
		'it-it': "Sandaconda",
		'pt-br': "Sandaconda",
		'de-de': "Sanaconda"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		'fr-fr': "Dunaja",
		'en-us': "Silicobra"
	},

	attacks: [{
		name: {
			'fr-fr': "Enroulement",
			'en-us': "Coil",
			'es-es': "Enrosque",
			'it-it': "Arrotola",
			'pt-br': "Enroscar",
			'de-de': "Einrollen"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, les attaques de ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'en-us': "During your next turn, this Pokémon's attacks do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'es-es': "Durante tu próximo turno, los ataques de este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, os ataques deste Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während deines nächsten Zuges fügen die Attacken dieses Pokémon dem Aktiven Pokémon deines Gegners 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Coud'Krâne",
			'en-us': "Skull Bash",
			'es-es': "Cabezazo",
			'it-it': "Capocciata",
			'pt-br': "Quebra-crânio",
			'de-de': "Schädelwumme"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "Its unique style of coiling allows it to blast sand out of its sand sac more efficiently."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539743,
				tcgplayer: 232442
			}
		},
	],
}

export default card
