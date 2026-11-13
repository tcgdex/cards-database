import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Wimpod",
		fr: "Sovkipou",
		de: "Reißlaus",
		es: "Wimpod",
		it: "Wimpod",
		pt: "Wimpod",
		'es-mx': "Wimpod"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Punk Out",
			fr: "Poudre d'Escampette",
			de: "Rückzack",
			es: "Renuncia",
			it: "Scappovia",
			pt: "Arregar",
			'es-mx': "Acobardamiento"
		},

		effect: {
			en: "If your opponent has any Pokémon ex in play, this Pokémon has no Retreat Cost.",
			fr: "Si votre adversaire a au moins un Pokémon-ex en jeu, ce Pokémon n'a pas de Coût de Retraite.",
			de: "Wenn dein Gegner mindestens 1 Pokémon-ex im Spiel hat, hat dieses Pokémon keine Rückzugskosten.",
			es: "Si tu rival tiene algún Pokémon ex en juego, este Pokémon no tiene ningún Coste de Retirada.",
			it: "Se il tuo avversario ha dei Pokémon-ex in gioco, questo Pokémon non ha costo di ritirata.",
			pt: "Se o seu oponente tiver algum Pokémon ex em jogo, este Pokémon não terá Custo de Recuo.",
			'es-mx': "Si tu rival tiene algún Pokémon ex en juego, este Pokémon no tiene ningún Costo de Retirada."
		}
	}],

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			'es-mx': "Colisión"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 727570,
		cardmarket: 918819
	}
}

export default card