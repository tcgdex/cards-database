import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Drifblim",
		fr: "Grodrive",
		de: "Drifzepeli",
		it: "Drifblim",
		es: "Drifblim",
		pt: "Drifblim"
	},

	illustrator: "Yuu Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			de: "Windstoß",
			it: "Raffica",
			es: "Tornado",
			pt: "Lufada de Vento"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			en: "Curse Spreading",
			fr: "Malédiction Disséminée",
			de: "Ausbreitender Fluch",
			it: "Spargimaledizione",
			es: "Maldición Dispersa",
			pt: "Maldição Alastrante"
		},

		effect: {
			en: "Put 8 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 8 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			de: "Lege 8 Schadensmarken beliebig auf die Pokémon deines Gegners.",
			it: "Metti otto segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			es: "Pon 8 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			pt: "Coloque 8 contadores de dano nos Pokémon do seu oponente como desejar."
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card