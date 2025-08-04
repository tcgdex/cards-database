import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Carracosta",
		fr: "Mégapagos",
		es: "Carracosta",
		it: "Carracosta",
		pt: "Carracosta",
		de: "Karippas"
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
		en: "Tirtouga",
		fr: "Carapagos",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ancient Custom",
				fr: "Coûtume Antique",
				es: "Costumbre Ancestral",
				it: "Antica Usanza",
				pt: "Antigo Costume",
				de: "Uralter Brauch"
			},
			effect: {
				en: "Pokémon Tool cards attached to your opponent’s Pokémon have no effect.",
				fr: "Les cartes Outil Pokémon attachées aux Pokémon de votre adversaire n’ont aucun effet.",
				es: "Las cartas de Herramienta Pokémon unidas a los Pokémon de tu rival no tienen efecto.",
				it: "Le carte Oggetto Pokémon assegnate ai Pokémon del tuo avversario non hanno effetto.",
				pt: "Cartas de Ferramenta Pokémon ligadas aos Pokémon do seu oponente não têm efeito.",
				de: "Die an die Pokémon deines Gegners angelegten Pokémon-Ausrüstungen haben keinen Effekt."
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
				en: "Aqua Impact",
				fr: "Impact Aqua",
				es: "Impacto Aqua",
				it: "Acquimpatto",
				pt: "Impacto Aqua",
				de: "Aqua-Einschlag"
			},
			effect: {
				en: "This attack does 20 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
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

	thirdParty: {
		cardmarket: 388052,
		tcgplayer: 194966
	}
}

export default card
