import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [767],
	set: Set,

	name: {
		en: "Wimpod",
		fr: "Sovkipou",
		es: "Wimpod",
		it: "Wimpod",
		pt: "Wimpod",
		de: "Reißlaus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Punk Out",
			fr: "Poudre d'Escampette",
			es: "Renuncia",
			it: "Scappovia",
			pt: "Arregar",
			de: "Rückzack"
		},

		effect: {
			en: "If your opponent has any Pokémon V in play, this Pokémon has no Retreat Cost.",
			fr: "Si votre adversaire a au moins un Pokémon-V en jeu, ce Pokémon n'a pas de Coût de Retraite.",
			es: "Si tu rival tiene algún Pokémon V en juego, este Pokémon no tiene ningún Coste de Retirada.",
			it: "Se il tuo avversario ha dei Pokémon-V in gioco, questo Pokémon non ha costo di ritirata.",
			pt: "Se o seu oponente tiver algum Pokémon V em jogo, este Pokémon não terá custo de Recuo.",
			de: "Wenn dein Gegner mindestens 1 Pokémon-V im Spiel hat, hat dieses Pokémon keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Roída",
			de: "Nagen"
		},

		damage: 10
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 664564,
		tcgplayer: 274457
	}
}

export default card