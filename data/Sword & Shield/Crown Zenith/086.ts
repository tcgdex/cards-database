import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [212],
	set: Set,

	name: {
		en: "Scizor",
		fr: "Cizayox",
		es: "Scizor",
		it: "Scizor",
		pt: "Scizor",
		de: "Scherox"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
		es: "Scyther",
		it: "Scyther",
		pt: "Scyther",
		de: "Sichlor"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "X-Scissor",
			fr: "Plaie Croix",
			es: "Tijera X",
			it: "Forbice X",
			pt: "Tesoura X",
			de: "Kreuzschere"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dangerous Claws",
			fr: "Griffes Redoutables",
			es: "Zarpas Peligrosas",
			it: "Artigli Pericolosi",
			pt: "Garras Temerárias",
			de: "Bedrohliche Klauen"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Básico, este ataque hace 80 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 80 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691804
	}
}

export default card