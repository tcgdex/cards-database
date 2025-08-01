import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Anorith",
		fr: "Anorith",
		es: "Anorith",
		it: "Anorith",
		pt: "Anorith",
		de: "Anorith"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		347,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "RESTORED",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Restored Barrier",
				fr: "Bouclier Recréé",
				es: "Barrera de Recreados",
				it: "Barriera Ricreazione",
				pt: "Barreira Restaurada",
				de: "Erweckte Barriere"
			},
			effect: {
				en: "Each of your Restored Pokémon has no Weakness.",
				fr: "Aucun de vos Pokémon Recréés n'a de Faiblesse.",
				es: "Ninguno de tus Pokémon Recreados tiene Debilidad.",
				it: "Nessuno dei tuoi Pokémon Ricreati ha debolezza.",
				pt: "Cada um de seus Pokémon Restaurados não possui Fraqueza.",
				de: "Keins deiner Erweckt-Pokémon hat eine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
				es: "Tijera X",
				it: "Forbice X",
				pt: "Tesoura X",
				de: "Kreuzschere"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	evolveFrom: {
		en: "Claw Fossil",
		fr: "Fossile Griffe",
		es: "Fósil Garra",
		it: "Fossilunghia",
		pt: "Claw Fossil",
		de: "Klauenfossil"
	},

	thirdParty: {
		cardmarket: 291626
	}
}

export default card
