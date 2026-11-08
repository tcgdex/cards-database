import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Grimmsnarl",
		'fr-fr': "Angoliath",
		'es-es': "Grimmsnarl",
		'it-it': "Grimmsnarl",
		'pt-br': "Grimmsnarl",
		'de-de': "Olangaar"
	},

	illustrator: "nagimiso",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [861],
	set: Set,

	evolveFrom: {
		'en-us': "Morgrem",
		'fr-fr': "Fourbelin",
		'es-es': "Morgrem",
		'it-it': "Morgrem",
		'pt-br': "Morgrem",
		'de-de': "Pelzebub"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dark Oath",
				'fr-fr': "Serment Obscur",
				'es-es': "Juramento Siniestro",
				'it-it': "Giuramento Oscuro",
				'pt-br': "Juramento Sinistro",
				'de-de': "Finsterer Schwur"
			},
			effect: {
				'en-us': "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon's attacks cost Colorless more.",
				'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, les attaques du Pokémon Actif de votre adversaire coûtent Colorless de plus.",
				'es-es': "Mientras este Pokémon esté en el Puesto Activo, los ataques del Pokémon Activo de tu rival cuestan Colorless más.",
				'it-it': "Fintanto che questo Pokémon è in posizione attiva, il costo degli attacchi del Pokémon attivo del tuo avversario aumenta di Colorless.",
				'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, os ataques do Pokémon Ativo do seu oponente custam Colorless a mais.",
				'de-de': "Solange dieses Pokémon in der Aktiven Position ist, erhöhen sich die Kosten der Attacken des Aktiven Pokémon deines Gegners um Colorless."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Press",
				'fr-fr': "Pression Énergétique",
				'es-es': "Presión Energética",
				'it-it': "Energipressa",
				'pt-br': "Aperto de Energia",
				'de-de': "Energiedruck"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 170,
	types: ["Darkness"],
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "With the hair wrapped around its body helping to enhance its muscles, this Pokémon can overwhelm even Machamp."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 458023,
				tcgplayer: 213221
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458023,
				tcgplayer: 213221
			}
		},
	],
}

export default card
