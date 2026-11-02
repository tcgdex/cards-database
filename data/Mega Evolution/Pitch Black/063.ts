import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		'es-mx': "Bronzor",
		de: "Bronzel",
		it: "Bronzor",
		pt: "Bronzor"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	dexId: [436],
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Mirror Attack",
			fr: "Attaque Miroir",
			es: "Ataque Espejo",
			'es-mx': "Ataque Espejo",
			de: "Spiegelangriff",
			it: "Attacco Specchio",
			pt: "Golpe Espelhado"
		},

		cost: ["Metal"],

		damage: "10+",

		effect: {
			en: "If your opponent's Active Pokémon is a {M} Pokémon, this attack does 30 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon {M}, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon {M}, este ataque hace 30 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon {M}, este ataque hace 30 puntos de daño más.",
			de: "Wenn das Aktive Pokémon deines Gegners ein {M}-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon {M}, questo attacco infligge 30 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon {M}, este ataque causará 30 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895848,
				tcgplayer: 704820
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895848,
				tcgplayer: 704820
			}
		},
	],
}

export default card
