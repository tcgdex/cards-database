import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [765],
	set: Set,

	name: {
		'en-us': "Oranguru",
		'fr-fr': "Gouroutan",
		'es-es': "Oranguru",
		'it-it': "Oranguru",
		'pt-br': "Oranguru",
		'de-de': "Kommandutan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Now You're in My Power",
			'fr-fr': "À ma Merci",
			'es-es': "Ya te Tengo",
			'it-it': "In Mio Potere",
			'pt-br': "Na Palma da Minha Mão",
			'de-de': "Machtbefugnis"
		},

		effect: {
			'en-us': "Until the end of your next turn, the Defending Pokémon's Weakness is now {C}. (The amount of Weakness doesn't change.)",
			'fr-fr': "Jusqu'à la fin de votre prochain tour, la Faiblesse du Pokémon Défenseur est maintenant de type {C}. (La valeur de la Faiblesse ne change pas.)",
			'es-es': "Hasta el final de tu próximo turno, la Debilidad del Pokémon Defensor pasa a ser {C}. (La cantidad de Debilidad no cambia).",
			'it-it': "Fino alla fine del tuo prossimo turno, la debolezza del Pokémon difensore diventa {C}. Quanto è debole non cambia.",
			'pt-br': "Até o final do seu próximo turno, a Fraqueza do Pokémon Defensor será {C}. (A quantidade de Fraqueza não muda.)",
			'de-de': "Bis zum Ende deines nächsten Zuges ist die Schwäche des Verteidigenden Pokémon jetzt {C}. (Die Höhe der Schwäche ändert sich nicht.)"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Smack",
			'fr-fr': "Claque",
			'es-es': "Palmetazo",
			'it-it': "Schiaffo",
			'pt-br': "Estalo",
			'de-de': "Klatscher"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794529,
				tcgplayer: 590011
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794529,
				tcgplayer: 590011
			}
		},
	],

	illustrator: "Saboteri",

}

export default card
