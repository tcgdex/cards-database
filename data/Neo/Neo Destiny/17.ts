import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Ariados",
		fr: "Migalos obscur",
		de: "Dunkles Ariados"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		168,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Spinarak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Entangle",
				fr: "Piège",
				de: "Falle stellen"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon, then flip a coin. If heads, the new Defending Pokémon is now Paralyzed.",
				fr: "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et échangez-le contre le Pokémon Défenseur, puis lancez une pièce. Si c'est face, le nouveau Pokémon Défenseur est maintenant Paralysé.",
				de: "Falls dein Gegner mindestens ein Pokémon auf der Bank hat, wähle eines von diesen und tausche es mit dem verteidigenden Pokémon aus. Wirf dann eine Münze. Bei 'Kopf' ist das neue verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Poison Bind",
				fr: "Entrave toxik",
				de: "Giftfesselung"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon can't retreat until the end of your opponent's next turn and if the effect of an attack, Pokémon Power, or Trainer card would change that player's Active Pokémon, that part of the effect does nothing.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas battre en retraite avant la fin du prochain tour de votre adversaire et si l'effet d'une attaque, Pouvoir Pokémon ou carte Dresseur vient à changer le Pokémon Actif, cette partie de l'attaque ne fait rien.",
				de: "Das verteidigende Pokémon ist jetzt vergiftet. Wirf eine Münze. Bei 'Kopf' kann sich das verteidigende Pokémon bis zum Ende des nächsten Zuges deines Gegners nicht zurückziehen, und wenn der Effekt eines Angriffs, einer Pokémon-Power oder Trainerkarte das aktive Pokémon dieses Spielers ändern würde, hat dieser Teil des Effekts dann keine Wirkung."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Où qu'il aille, il tisse un fil qui le ramène à sa toile."
	},

	thirdParty: {
		cardmarket: 274669
	}
}

export default card
