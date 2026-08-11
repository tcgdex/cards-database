import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [436],
	set: Set,

	name: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Mirror Attack",
			'fr-fr': "Attaque Miroir",
			'es-es': "Ataque Espejo",
			'it-it': "Attacco Specchio",
			'pt-br': "Golpe Espelhado",
			'de-de': "Spiegelangriff"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a {P} Pokémon, this attack does 30 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon {P}, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon {P}, este ataque hace 30 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon {P}, questo attacco infligge 30 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {P}, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein {P}-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "Ancient people believed that the pattern on Bronzor's back contained a mysterious power.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760800,
				tcgplayer: 542891
			}
		},
	],

	illustrator: "sowsow",

}

export default card