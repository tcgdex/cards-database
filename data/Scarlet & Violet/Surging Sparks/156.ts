import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Oranguru",
		fr: "Gouroutan",
		es: "Oranguru",
		it: "Oranguru",
		pt: "Oranguru",
		de: "Kommandutan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Now You're in My Power",
			fr: "À ma Merci",
			es: "Ya te Tengo",
			it: "In Mio Potere",
			pt: "Na Palma da Minha Mão",
			de: "Machtbefugnis"
		},

		effect: {
			en: "Until the end of your next turn, the Defending Pokémon's Weakness is now {C}. (The amount of Weakness doesn't change.)",
			fr: "Jusqu'à la fin de votre prochain tour, la Faiblesse du Pokémon Défenseur est maintenant de type {C}. (La valeur de la Faiblesse ne change pas.)",
			es: "Hasta el final de tu próximo turno, la Debilidad del Pokémon Defensor pasa a ser {C}. (La cantidad de Debilidad no cambia).",
			it: "Fino alla fine del tuo prossimo turno, la debolezza del Pokémon difensore diventa {C}. Quanto è debole non cambia.",
			pt: "Até o final do seu próximo turno, a Fraqueza do Pokémon Defensor será {C}. (A quantidade de Fraqueza não muda.)",
			de: "Bis zum Ende deines nächsten Zuges ist die Schwäche des Verteidigenden Pokémon jetzt {C}. (Die Höhe der Schwäche ändert sich nicht.)"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Smack",
			fr: "Claque",
			es: "Palmetazo",
			it: "Schiaffo",
			pt: "Estalo",
			de: "Klatscher"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Saboteri"
}

export default card
