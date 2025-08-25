import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Shuckle",
		fr: "Caratroc",
		de: "Pottrott"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		213,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Hard Shell",
				fr: "Carapadure",
				de: "Harte Schale"
			},
			effect: {
				en: "Whenever an attack (including your own) does 40 or less damage to Shuckle (after applying Weakness and Resistance), reduce that damage to 10. (Any other effects of attacks still happen.) This power stops working while Shuckle is Asleep, Confused, or Paralyzed.",
				fr: "Lorsqu'une attaque (y compris la vôtre) inflige au maximum 40 dégâts à Caratroc (après application de la Faiblesse et de la Résistance), réduisez ces dégâts à 10. (Tout autre effet ou attaque subsiste.) Ce pouvoir cesse de fonctionner si Caratroc est Endormi, Confus ou Paralysé.",
				de: "Immer wenn ein Angriff (einschließlich deiner eigenen) Pottrott 40 oder weniger Schadenspunkte zufügt (nach Verrechnung von Schwäche und Resistenz), reduziere diesen Schaden um 10. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.) Diese Fähigkeit verliert ihre Wirkung, solange Pottrott schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Toxic Saliva",
				fr: "Essence toxik",
				de: "Ätzender Speichel"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. It now takes 20 Poison damage after each player's turn (even if it was already Poisoned).",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Il subit maintenant 20 dégâts Poison au lieu de 10 après le tour de chaque joueur (même s'il était déjà Empoisonné).",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt vergiftet. Es erleidet jetzt 20 statt 10 Schadenspunkte durch Gift nach dem Zug jedes Spielers (selbst wenn es bereits vergiftet war)."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Il transporte des baies dans sa coquille. Pour éviter les attaques, il se cache sous les pierres et reste immobile."
	},

	thirdParty: {
		cardmarket: 274637,
		tcgplayer: 89187
	}
}

export default card
