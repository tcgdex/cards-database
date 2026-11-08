import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It attracts prey with its sweet-smelling saliva, then chomps down. It takes a whole day to eat prey.",
	},

	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'es-es': "Carnivine",
		'es-mx': "Carnivine",
		'de-de': "Venuflibis",
		'it-it': "Carnivine",
		'pt-br': "Carnivine"
	},

	illustrator: "Heisuke Kitazawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [455],
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Chomp Whole",
			'fr-fr': "Mâchoire Dévorante",
			'es-es': "Mordisco Total",
			'es-mx': "De un Bocado",
			'de-de': "Mit einem Happs",
			'it-it': "Masticatutto",
			'pt-br': "Abocanhar Inteiro"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: "80+",

		effect: {
			'en-us': "If your opponent's Active Pokémon has no Retreat Cost, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire n'a pas de Coût de Retraite, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival no tiene ningún Coste de Retirada, este ataque hace 80 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival no tiene ningún Costo de Retirada, este ataque hace 80 puntos de daño más.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners keine Rückzugskosten hat, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario non ha costo di ritirata, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente não tiver Custo de Recuo, este ataque causará 80 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886396,
				tcgplayer: 693459
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886396,
				tcgplayer: 693459
			}
		},
	],
}

export default card
