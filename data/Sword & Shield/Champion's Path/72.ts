import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Grapploct V",
		fr: "Krakos V",
		es: "Grapploct V",
		it: "Grapploct V",
		pt: "Grapploct V",
		de: "Kaocto V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [853],
	set: Set,
	hp: 210,

	types: [
		"Fighting",
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	attacks: [{
		name: {
			en: "Tie Up",
			fr: "Ligoter",
			es: "Sujetar",
			it: "Ben Stretto",
			pt: "Imobilizar",
			de: "Fesselgriff"
		},

		effect: {
			en: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			es: "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
			pt: "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante o próximo turno do seu oponente.",
			de: "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Moonsault Press",
			fr: "Moonsault Press",
			es: "Presión Salto Lunar",
			it: "Pressa Acrobatica",
			pt: "Mortal Compressor",
			de: "Moonsault Press"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 100 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 100 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 100 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 100 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 500015,
		tcgplayer: 223071
	}
}

export default card
