import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade",
		it: "Hypno",
		de: "Hypno"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
		it: "Drowzee",
		de: "Traumato"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Prophecy",
				fr: "Prophétie",
				it: "Profezia",
				de: "Vorhersagung"
			},
			effect: {
				en: "Look at up to 3 cards from the top of either player's deck and rearrange them as you like.",
				fr: "Regardez jusqu'à 3 cartes du dessus du deck d'un des deux joueurs et réarrangez-les comme bon vous semble.",
				it: "Guarda fino a 3 carte dalla cima del mazzo di uno dei due giocatori e risistemale come preferisci.",
				de: "Schaue dir bis zu drei der obersten Karten vom Deck deines Gegners oder deinem eigenen Deck an, und lege sie in beliebiger Reihenfolge wieder auf das Deck zurück."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dark Mind",
				fr: "Sombre-esprit",
				it: "Pensiero Oscuro",
				de: "Finsteres Gemüt"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 10 dégâts. (Ne pas appliquer la Résistance et la Faiblesse au Pokémon du Banc.)",
				it: "Se il tuo avversario ha dei Pokémon in Panchina, scegline uno e questo attacco gli infligge 10 danni (non applicare Debolezza e Resistenza ai Pokémon in Panchina).",
				de: "Falls dein Gegner irgendwelche Pokémon auf der Bank hat, wähle eines von ihnen. Dieser Angriff fügt ihm 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "When it locks eyes with an enemy, it will use a mix of psi moves such as Hypnosis and Confusion.",
		fr: "En fixant son adversaire, il l'assaille avec les attaques Psy Hypnose et Convulsion.",
		it: "Quando fissa negli occhi un nemico, usa un misto di poteri psionici, come ipnosi e confusione.",
		de: "Wenn es den Gegner ins Auge fasst, setzt es eine Mischung aus Psi-Bewegungen wie Hypnose und Verwirrung ein."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 273869,
				tcgplayer: 106524
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273869,
				tcgplayer: 106524
			}
		},
	],
}

export default card
