import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide",
		de: "Duflor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe",
		de: "Myrapla"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Strange Powder",
				fr: "Poudre étrange",
				de: "Seltsames Puder"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused; if tails, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus ; si c'est pile, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt verwirrt; bei „Zahl“ schläft das verteidigende Pokémon jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sticky Nectar",
				fr: "Nectar collant",
				de: "Klebriger Nektar"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and, until the end of your opponent's next turn, as long as Gloom is your Active Pokémon, the Defending Pokémon can't retreat, and if the effect of an attack, Pokémon Power, or Trainer card would change that player's Active Pokémon, that part of the effect does nothing. If tails, this attack does 20 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires et, jusqu'à la fin du prochain tour de votre adversaire, aussi longtemps qu'Ortide est votre Pokémon Actif, le Pokémon Défenseur ne peut pas battre en retraite, et si l'effet d'une attaque, Pouvoir Pokémon ou carte Dresseur vient à changer le Pokémon Actif de ce joueur, cette partie de l'effet ne fait rien. Si c'est pile, cette attaque inflige 20 dégâts.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu. Das verteidigende Pokémon kann sich bis zum Ende des nächsten gegnerischen Zugs nicht zurückziehen, solange Duflor dein aktives Pokémon ist. Wenn die Auswirkungen eines Angriffs, einer Pokémon-Power oder einer Trainerkarte das aktive Pokémon dieses Spielers ändern würde, bleibt dieser Teil der Auswirkungen ohne Effekt. Bei „Zahl“ fügt dieser Angriff 20 Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "What appears to be drool is actually sweet honey. It is very sticky and clings stubbornly if touched.",
		fr: "Ce qui semble être de la bave est en fait un miel sucré. Il est très collant et adhère obstinément si on le touche.",
		de: "Was wie Sabber aussieht, ist eigentlich süßer Honig. Es ist sehr klebrig, und klebt bei Berührung hartnäckig."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274436,
				tcgplayer: 85778
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274436,
				tcgplayer: 85778
			}
		}
	]
}

export default card
