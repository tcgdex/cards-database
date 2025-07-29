import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		de: "Pantimos"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Airy Wall",
				fr: "Mur fantôme",
				de: "Luftmauer"
			},
			effect: {
				en: "If your opponent's Pokémon that has 2 or less Energy cards attached to it attacks Mr. Mime, prevent all damage done to Mr. Mime from that attack. If Mime Jr. is anywhere under Mr. Mime, prevent all effects of that attack, including damage, done to Mr. Mime.",
				fr: "Si un Pokémon de votre adversaire possédant un maximum de 2 cartes Énergie attaque M. Mime, prévenez tous les dégâts infligés à M. Mime par cette attaque. Si M. Mime Jr se trouve en dessous de M. Mime, prévenez tous les effets, dégâts inclus, infligés à M. Mime par cette attaque.",
				de: "Verhindere alle Schadenspunkte, die Pantimos durch einen Angriff eines gegnerischen Pokémon, an dem weniger als 3 Energiekarten angelegt sind, zugefügt würden. Wenn Pantimimi sich an beliebiger Stelle unter Pantimos befindet, verhindere zusätzlich alle Effekte dieses Angriffs, die Pantimos zugefügt würden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Trick Play",
				fr: "Jeu risqué",
				de: "Tricktheater"
			},
			effect: {
				en: "Put a coin next to your Active Pokémon without showing your opponent and cover it with your hand. Your opponent guesses if the coin is heads or tails. If he or she is wrong, this attack does 50 damage to the Defending Pokémon. If he or she is right, Mr. Mime does 20 damage to itself, and this attack's damage isn't affected by Weakness or Resistance.",
				fr: "Placez une pièce à côté de votre Pokémon Actif. Ne la montrez pas à votre adversaire et cachez-la avec votre main. Votre adversaire doit deviner si c'est pile ou face. S'il ou elle a tort, cette attaque inflige 50 dégâts au Pokémon Défenseur. S'il ou elle a raison, M. Mime s'inflige 20 dégâts et les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Lege 1 Münze verdeckt neben dein Aktives Pokémon. Dein Gegner muss erraten, ob die Münze \"Kopf\" oder \"Zahl\" zeigt. Wenn er falsch rät, fügt dieser Angriff dem Verteidigenden Pokémon 50 Schadenspunkte zu. Wenn er richtig rät, fügt sich Pantimos selbst 20 Schadenspunkte, die durch Schwäche und Resistenz nicht verändert werden, zu."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	description: {
		fr: "Un expert de la pantomime dont les gestes façonnent de solides murs invisibles."
	},

	thirdParty: {
		cardmarket: 277659
	}
}

export default card
