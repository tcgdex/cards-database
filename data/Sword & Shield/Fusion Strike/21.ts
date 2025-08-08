import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [763],
	set: Set,

	name: {
		en: "Tsareena V",
		fr: "Sucreine V",
		es: "Tsareena V",
		it: "Tsareena V",
		pt: "Tsareena V",
		de: "Fruyal V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "PLANETA Mochizuki",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Queen's Orders",
			fr: "Décret de la Reine",
			de: "Auftrag der Königin",
			es: "Mandatos Regios",
			pt: "Ordens da Rainha",
			it: "Volere della Regina"
		},

		damage: "20+",

		effect: {
			en: "You may discard any number of your Benched Pokémon. This attack does 40 more damage for each Benched Pokémon you discarded in this way.",
			fr: "Vous pouvez défausser autant de vos Pokémon de Banc que vous le voulez. Cette attaque inflige 40 dégâts supplémentaires pour chaque Pokémon de Banc défaussé de cette façon.",
			de: "Du kannst beliebig viele Pokémon von deiner Bank auf deinen Ablagestapel legen. Diese Attacke fügt für jedes auf diese Weise von deiner Bank abgelegte Pokémon 40 Schadenspunkte mehr zu.",
			es: "Puedes descartar cualquier cantidad de tus Pokémon en Banca. Este ataque hace 40 puntos de daño más por cada Pokémon en Banca que hayas descartado de esta manera.",
			pt: "Você pode descartar qualquer número dos seus Pokémon no Banco. Este ataque causa 40 pontos de dano a mais para cada Pokémon no Banco descartado desta forma.",
			it: "Puoi scartare un numero qualsiasi di Pokémon che hai in panchina. Questo attacco infligge 40 danni in più per ogni Pokémon in panchina che hai scartato in questo modo."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
