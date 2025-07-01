import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine",
		fr: "Arcanin",
		de: "Arkani",
		it: "Arcanine",
		es: "Arcanine",
		pt: "Arcanine",
		'es-mx': "Arcanine"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			de: "Flackern",
			it: "Fiammata",
			es: "Llama",
			pt: "Chama",
			'es-mx': "Llama"
		},

		damage: 50
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Punishing Fang",
			fr: "Croc Punitif",
			de: "Strafende Fänge",
			it: "Zanna Punitiva",
			es: "Colmillo Castigador",
			pt: "Caninos Punitivos",
			'es-mx': "Colmillo Castigador"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a {D} Pokémon, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon {D}, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein {D}-Pokémon ist, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon {D}, questo attacco infligge 100 danni in più.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon {D}, este ataque hace 100 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon {D}, este ataque causará 100 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon {D}, este ataque hace 100 puntos de daño más."
		},

		damage: "100+"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		normal: true,
		reverse: true,
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
