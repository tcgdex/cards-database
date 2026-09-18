import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Espeon ex",
		fr: "Mentali-ex",
		de: "Psiana-ex",
		es: "Espeon ex",
		it: "Espeon-ex",
		'es-mx': "Espeon ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [196],
	hp: 260,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Solar Beatdown",
			fr: "Dérouillée Solaire",
			de: "Solarniederprügler",
			es: "Insolación",
			it: "Batosta Solare",
			'es-mx': "Derrumbe Solar"
		},

		effect: {
			en: "This attack does 30 damage for each of your Pokémon in play.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon en jeu.",
			de: "Diese Attacke fügt für jedes deiner Pokémon im Spiel 30 Schadenspunkte zu.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en juego.",
			it: "Questo attacco infligge 30 danni per ciascuno dei tuoi Pokémon in gioco.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en juego."
		},

		damage: "30×",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907677,
				tcgplayer: 696834
			}
		}
	],
}

export default card