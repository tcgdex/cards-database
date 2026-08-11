import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Carracosta",
		'fr-fr': "Mégapagos",
		'es-es': "Carracosta",
		'it-it': "Carracosta",
		'pt-br': "Carracosta",
		'de-de': "Karippas"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		565,
	],

	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Tirtouga",
		'fr-fr': "Carapagos",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Ancient Custom",
				'fr-fr': "Coûtume Antique",
				'es-es': "Costumbre Ancestral",
				'it-it': "Antica Usanza",
				'pt-br': "Antigo Costume",
				'de-de': "Uralter Brauch"
			},
			effect: {
				'en-us': "Pokémon Tool cards attached to your opponent’s Pokémon have no effect.",
				'fr-fr': "Les cartes Outil Pokémon attachées aux Pokémon de votre adversaire n’ont aucun effet.",
				'es-es': "Las cartas de Herramienta Pokémon unidas a los Pokémon de tu rival no tienen efecto.",
				'it-it': "Le carte Oggetto Pokémon assegnate ai Pokémon del tuo avversario non hanno effetto.",
				'pt-br': "Cartas de Ferramenta Pokémon ligadas aos Pokémon do seu oponente não têm efeito.",
				'de-de': "Die an die Pokémon deines Gegners angelegten Pokémon-Ausrüstungen haben keinen Effekt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Impact",
				'fr-fr': "Impact Aqua",
				'es-es': "Impacto Aqua",
				'it-it': "Acquimpatto",
				'pt-br': "Impacto Aqua",
				'de-de': "Aqua-Einschlag"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its jaws are terrifyingly powerful. It could eat Omastar and Omanyte whole and not be bothered in the slightest by their shells.",
	},

	thirdParty: {
		cardmarket: 388052,
		tcgplayer: 194966
	}
}

export default card
