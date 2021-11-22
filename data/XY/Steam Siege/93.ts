import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Braviary",
		fr: "Gueriaigle",
		es: "Braviary",
		it: "Braviary",
		pt: "Braviary",
		de: "Washakwil"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		628,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rufflet",
		fr: "Furaiglon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
				es: "Emboscada",
				it: "Imboscata",
				pt: "Emboscada",
				de: "Hinterhalt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 50 de danos adicionais.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Drop",
				fr: "Chute Libre",
				es: "Caída Libre",
				it: "Cadutalibera",
				pt: "Queda Livre",
				de: "Freier Fall"
			},
			effect: {
				en: "This attack does 120 damage minus 20 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 120 dégâts moins 20 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 120 puntos de daño menos 20 puntos de daño por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 120 danni meno 20 per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 120 de danos menos 20 de danos para cada Colorless no Custo para Recuar do Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 120 Schadenspunkte minus 20 Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "120−",

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



}

export default card
