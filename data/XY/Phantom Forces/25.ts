import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
		es: "Pachirisu",
		it: "Pachirisu",
		pt: "Pachirisu",
		de: "Pachirisu"
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		417,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Trick Sticker",
				fr: "Colle-Farce",
				es: "Etiqueta Fullera",
				it: "Foglietto Scherzetto",
				pt: "Truque Grudento",
				de: "Trick-Sticker"
			},
			effect: {
				en: "The Defending Pokémon's Weakness is now Lightning until the end of your next turn. (The amount of Weakness doesn't change.)",
				fr: "La Faiblesse du Pokémon Défenseur est maintenant Lightning jusqu'à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
				es: "La Debilidad del Pokémon Defensor pasa a ser Lightning hasta el final de tu próximo turno. (La cantidad de Debilidad no cambia).",
				it: "La debolezza del Pokémon difensore diventa Lightning fino alla fine del tuo prossimo turno. Quanto è debole non cambia.",
				pt: "A Fraqueza do Pokémon Defensor passa a ser Lightning até o final da sua próxima vez de jogar. (A quantidade de Fraqueza não muda.)",
				de: "Bis zum Ende deines nächsten Zuges ist die Schwäche des Verteidigenden Pokémon jetzt Lightning. (Die Höhe der Schwäche ändert sich nicht.)"
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Pachi",
				fr: "Pachi",
				es: "Pachi",
				it: "Pachi",
				pt: "Pachi",
				de: "Brzzzl"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
