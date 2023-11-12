import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Mélodelfe-ex",
		en: "Clefable ex",
		es: "Clefable ex",
		it: "Clefable-ex",
		pt: "Clefable ex",
		de: "Pixi-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Zone Sélène",
			en: "Lunar Zone",
			es: "Zona Lunar",
			it: "Area Lunare",
			pt: "Zona Lunar",
			de: "Lunarzone"
		},

		effect: {
			fr: "Vos Pokémon auxquels de l'Énergie Psychic est attachée n'ont pas de Coût de Retraite.",
			en: "All of your Pokémon that have Psychic Energy attached have no Retreat Cost.",
			es: "Ninguno de tus Pokémon que tenga alguna Energía Psychic unida tiene Coste de Retirada.",
			it: "Tutti i tuoi Pokémon che hanno delle Energie Psychic assegnate non hanno costo di ritirata.",
			pt: "Todos os seus Pokémon que têm Energia Psychic ligada a eles não têm custo de Recuo.",
			de: "Alle deine Pokémon, an die Psychic-Energie angelegt ist, haben keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			fr: "Lune Merveilleuse",
			en: "Wondrous Moon",
			es: "Luna Extraordinaria",
			it: "Luna Meravigliosa",
			pt: "Lua Magnífica",
			de: "Wundersamer Mond"
		},

		effect: {
			fr: "Vous pouvez déplacer autant d'Énergies Psychic que vous le voulez de vos Pokémon vers vos autres Pokémon, comme il vous plaît.",
			en: "You may move any amount of Psychic Energy from your Pokémon to your other Pokémon in any way you like.",
			es: "Puedes mover cualquier cantidad de Energías Psychic de tus Pokémon a tus otros Pokémon de la manera que desees.",
			it: "Puoi spostare un numero qualsiasi di Energie Psychic dall'uno all'altro dei tuoi Pokémon nel modo che preferisci.",
			pt: "Você pode mover qualquer quantidade de Energia Psychic dos seus Pokémon para outros Pokémon seus como desejar.",
			de: "Du kannst beliebig viele Psychic-Energien von deinen Pokémon beliebig auf deine anderen Pokémon verschieben."
		},

		damage: 170
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card