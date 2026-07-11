import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "PlusPower",
		fr: "PlusPower",
		de: "PlusPower",
		it: "PlusPotenza"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach PlusPower to your Active Pokémon. At the end of your turn, discard PlusPower. If this Pokémon's attack does damage to the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon.",
		fr: "Attachez PlusPower à votre Pokémon actif. À la fin de votre tour, défaussez PlusPower. Si l'attaque de ce Pokémon inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), l'attaque inflige 10 dégâts supplémentaires au Pokémon Défenseur.",
		de: "Lege PlusPower auf Deinem aktiven Pokémon ab, und entferne die Karte am Ende Deines Zugs wieder. Fügt deine Attacke dem verteidigenden Pokémon Schaden zu (nachdem Schwäche und Resistenz abgerechnet wurden), so erleidet das verteidigende Pokémon 10 weitere Schadenspunkte.",
		it: "Assegna la PlusPotenza al tuo Pokémon Attivo. Alla fine del tuo turno, scarta PlusPotenza. Se l'attacco di questo Pokémon danneggia il Pokémon Difensore (dopo aver applicato Debolezza e Resistenza), l'attacco infligge altri 10 danni al Pokémon Difensore."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273779,
				tcgplayer: 42430
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107081
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107081
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
