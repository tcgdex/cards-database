import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
		es: "Hydreigon",
		it: "Hydreigon",
		pt: "Hydreigon",
		de: "Trikephalo"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],
	stage: "Stage2",
	illustrator: "hatachu",

	attacks: [{
		name: {
			en: "Dragon Counter",
			fr: "Draco-Riposte",
			es: "Contraataque Dragón",
			it: "Contrattacco Drago",
			pt: "Dragon Counter",
			de: "Drachenkonter"
		},

		effect: {
			en: "This attack does 100 more damage for each Prize card your opponent took during their last turn.",
			fr: "Cette attaque inflige 100 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée pendant son dernier tour.",
			es: "Este ataque hace 100 puntos de daño más por cada carta de Premio que haya cogido tu rival durante su último turno.",
			it: "Questo attacco infligge 100 danni in più per ogni carta Premio presa dal tuo avversario durante il suo ultimo turno.",
			pt: "This attack does 100 more damage for each Prize card your opponent took during their last turn.",
			de: "Diese Attacke fügt für jede von deinem Gegner während seines letzten Zuges genommene Preiskarte 100 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Psychic", "Darkness"]
	}, {
		name: {
			en: "Pitch-Black Fangs",
			fr: "Crocs Nuit Noire",
			es: "Colmillos Azabaches",
			it: "Zanne Buiopesto",
			pt: "Pitch-Black Fangs",
			de: "Pechschwarze Fänge"
		},

		damage: 210,
		cost: ["Psychic", "Darkness", "Colorless", "Colorless"]
	}],

	retreat: 3,
	dexId: [635],

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
		es: "Zweilous",
		it: "Zweilous",
		pt: "Zweilous",
		de: "Duodino"
	},

	description: {
		en: "The three heads take turns sinking their teeth into the opponent. Their attacks won't slow until their target goes down."
	},

	regulationMark: "E"
}

export default card
