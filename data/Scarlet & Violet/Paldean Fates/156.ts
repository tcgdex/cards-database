import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [426],
	set: Set,

	name: {
		en: "Drifblim",
		fr: "Grodrive",
		es: "Drifblim",
		it: "Drifblim",
		pt: "Drifblim",
		de: "Drifzepeli"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			en: "Curse Spreading",
			fr: "Malédiction Disséminée",
			es: "Maldición Dispersa",
			it: "Spargimaledizione",
			pt: "Maldição Alastrante",
			de: "Ausbreitender Fluch"
		},

		effect: {
			en: "Put 8 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 8 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			es: "Pon 8 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			it: "Metti otto segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			pt: "Coloque 8 contadores de dano nos Pokémon do seu oponente como desejar.",
			de: "Lege 8 Schadensmarken beliebig auf die Pokémon deines Gegners."
		}
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
		es: "Drifloon",
		it: "Drifloon",
		pt: "Drifloon",
		de: "Driftlon"
	}
}

export default card