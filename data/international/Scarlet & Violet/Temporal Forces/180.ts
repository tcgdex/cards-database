import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [108],
	set: Set,

	name: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
		'es-es': "Lickitung",
		'it-it': "Lickitung",
		'pt-br': "Lickitung",
		'de-de': "Schlurp"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tongue Pull",
			'fr-fr': "Langue Tireuse",
			'es-es': "Tiro de Lengua",
			'it-it': "Tiralingua",
			'pt-br': "Puxão de Língua",
			'de-de': "Ziehende Zunge"
		},

		effect: {
			'en-us': "Your opponent reveals their hand. Put up to 2 Basic Pokémon you find there onto your opponent's Bench.",
			'fr-fr': "Votre adversaire montre sa main. Placez jusqu'à 2 Pokémon de base que vous y trouvez sur le Banc de votre adversaire.",
			'es-es': "Tu rival enseña las cartas de su mano. Pon hasta 2 Pokémon Básicos que encuentres entre ellas en la Banca de tu rival.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Prendi fino a due Pokémon Base presenti tra esse e mettili nella sua panchina.",
			'pt-br': "Seu oponente revela a mão dele. Coloque até 2 Pokémon Básicos que encontrar lá no Banco do seu oponente.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Lege bis zu 2 Basis-Pokémon, die du dort findest, auf die Bank deines Gegners."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'es-es': "Fuerza",
			'it-it': "Forza",
			'pt-br': "Força",
			'de-de': "Stärke"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "If this Pokémon's sticky saliva gets on you and you don't clean it off, an intense itch will set in. The itch won't go away, either.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760810,
				tcgplayer: 542901
			}
		},
	],

	illustrator: "Orca",

}

export default card