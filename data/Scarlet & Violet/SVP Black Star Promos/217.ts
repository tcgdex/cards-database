import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Nidoking ex",
		fr: "Nidoking-ex de la Team Rocket"
	},
	suffix: "EX",
	rarity: "None",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	evolveFrom: {
		en: "Team Rocket's Nidorino",
		fr: "Nidorino de la Team Rocket",
		de: "Team Rockets Nidorino",
		it: "Nidorino del Team Rocket",
		es: "Nidorino del Team Rocket",
		pt: "Nidorino da Equipe Rocket",
		'es-mx': "Nidorino del Equipo Rocket"
	},
	stage: "Stage2",
	illustrator: "5ban Graphics",
	dexId: [34],

	attacks: [
		{
			cost: ["Darkness","Darkness","Colorless"],
			name: {
				en: "Tainted Horn",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 8 damage counters on " +
					"that Pokémon instead of 1."
			},
			damage: "100",
		},
		{
			cost: ["Darkness","Darkness","Darkness","Colorless"],
			name: {
				en: "Kingly Impact",
			},
			damage: "240",
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
