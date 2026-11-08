import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [36],
	set: Set,

	name: {
		'fr-fr': "Mélodelfe-ex",
		'en-us': "Clefable ex",
		'es-es': "Clefable ex",
		'it-it': "Clefable-ex",
		'pt-br': "Clefable ex",
		'de-de': "Pixi-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Mélofée",
		'en-us': "Clefairy",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Zone Sélène",
			'en-us': "Lunar Zone",
			'es-es': "Zona Lunar",
			'it-it': "Area Lunare",
			'pt-br': "Zona Lunar",
			'de-de': "Lunarzone"
		},

		effect: {
			'fr-fr': "Vos Pokémon auxquels de l'Énergie {P} est attachée n'ont pas de Coût de Retraite.",
			'en-us': "All of your Pokémon that have {P} Energy attached have no Retreat Cost.",
			'es-es': "Ninguno de tus Pokémon que tenga alguna Energía {P} unida tiene Coste de Retirada.",
			'it-it': "Tutti i tuoi Pokémon che hanno delle Energie {P} assegnate non hanno costo di ritirata.",
			'pt-br': "Todos os seus Pokémon que têm Energia {P} ligada a eles não têm custo de Recuo.",
			'de-de': "Alle deine Pokémon, an die {P}-Energie angelegt ist, haben keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			'fr-fr': "Lune Merveilleuse",
			'en-us': "Wondrous Moon",
			'es-es': "Luna Extraordinaria",
			'it-it': "Luna Meravigliosa",
			'pt-br': "Lua Magnífica",
			'de-de': "Wundersamer Mond"
		},

		effect: {
			'fr-fr': "Vous pouvez déplacer autant d'Énergies {P} que vous le voulez de vos Pokémon vers vos autres Pokémon, comme il vous plaît.",
			'en-us': "You may move any amount of {P} Energy from your Pokémon to your other Pokémon in any way you like.",
			'es-es': "Puedes mover cualquier cantidad de Energías {P} de tus Pokémon a tus otros Pokémon de la manera que desees.",
			'it-it': "Puoi spostare un numero qualsiasi di Energie {P} dall'uno all'altro dei tuoi Pokémon nel modo che preferisci.",
			'pt-br': "Você pode mover qualquer quantidade de Energia {P} dos seus Pokémon para outros Pokémon seus como desejar.",
			'de-de': "Du kannst beliebig viele {P}-Energien von deinen Pokémon beliebig auf deine anderen Pokémon verschieben."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725162,
				tcgplayer: 509821,
				cardtrader: 255767
			}
		},
	],

	suffix: "ex",
	illustrator: "Satoshi Shirai",

	
}

export default card
