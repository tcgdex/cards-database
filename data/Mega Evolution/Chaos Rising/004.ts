import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Carnivine",
		fr: "Vortente",
		es: "Carnivine",
		'es-mx': "Carnivine",
		de: "Venuflibis",
		it: "Carnivine",
		pt: "Carnivine"
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
			en: "Chomp Whole",
			fr: "Mâchoire Dévorante",
			es: "Mordisco Total",
			'es-mx': "De un Bocado",
			de: "Mit einem Happs",
			it: "Masticatutto",
			pt: "Abocanhar Inteiro"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: "80+",

		effect: {
			en: "If your opponent's Active Pokémon has no Retreat Cost, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire n'a pas de Coût de Retraite, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival no tiene ningún Coste de Retirada, este ataque hace 80 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival no tiene ningún Costo de Retirada, este ataque hace 80 puntos de daño más.",
			de: "Wenn das Aktive Pokémon deines Gegners keine Rückzugskosten hat, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario non ha costo di ritirata, questo attacco infligge 80 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente não tiver Custo de Recuo, este ataque causará 80 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693459,
		cardmarket: 886396
	}
}

export default card