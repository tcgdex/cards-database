import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [861],
	set: Set,

	name: {
		'fr-fr': "Angoliath",
		'en-us': "Grimmsnarl",
		'es-es': "Grimmsnarl",
		'it-it': "Grimmsnarl",
		'pt-br': "Grimmsnarl",
		'de-de': "Olangaar"
	},

	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		'fr-fr': "Fourbelin",
		'en-us': "Morgrem"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Serment Obscur",
			'en-us': "Dark Oath",
			'es-es': "Juramento Siniestro",
			'it-it': "Giuramento Oscuro",
			'pt-br': "Juramento Sinistro",
			'de-de': "Finsterer Schwur"
		},

		effect: {
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, les attaques du Pokémon Actif de votre adversaire coûtent Colorless de plus.",
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon's attacks cost Colorless more.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, los ataques del Pokémon Activo de tu rival cuestan Colorless más.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il costo degli attacchi del Pokémon attivo del tuo avversario aumenta di Colorless.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, os ataques do Pokémon Ativo do seu oponente custam Colorless a mais.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, erhöhen sich die Kosten der Attacken des Aktiven Pokémon deines Gegners um Colorless."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Pression Énergétique",
			'en-us': "Energy Press",
			'es-es': "Presión Energética",
			'it-it': "Energipressa",
			'pt-br': "Aperto de Energia",
			'de-de': "Energiedruck"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "Stage2",

	description: {
		'en-us': "With the hair wrapped around its body helping to enhance its muscles, this Pokémon can overwhelm even Machamp."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539813,
				tcgplayer: 232466
			}
		},
	],
}

export default card
