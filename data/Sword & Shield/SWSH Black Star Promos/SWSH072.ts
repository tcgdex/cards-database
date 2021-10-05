import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon",
		fr: "Aquali",
		es: "Vaporeon",
		pt: "Vaporeon",
		de: "Aquana"
	},

	illustrator: "so-taro",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Watery Shroud",
			fr: "Voile Aquatique",
			es: "Manto Acuoso",
			pt: "Watery Shroud",
			de: "Wasservorhang"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent’s).",
			fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
			es: "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques (tanto tuyos como los de tu rival).",
			pt: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent’s).",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Attacken (deine und die deines Gegners) zugefügt wird."
		}
	}],

	attacks: [{
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			es: "Hidrobomba",
			pt: "Hydro Pump",
			de: "Hydropumpe"
		},

		effect: {
			en: "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
			pt: "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours."
	},

	stage: "Stage1",
	dexId: [134],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
