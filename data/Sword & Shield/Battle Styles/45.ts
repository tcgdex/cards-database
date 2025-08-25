import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [466],
	set: Set,

	name: {
		en: "Electivire",
		fr: "Élekable",
		es: "Electivire",
		it: "Electivire",
		pt: "Electivire",
		de: "Elevoltek"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
		es: "Electabuzz",
		it: "Electabuzz",
		pt: "Electabuzz",
		de: "Elektek"
	},

	attacks: [{
		name: {
			en: "Tumbling Attack",
			fr: "Attaque Trébuchante",
			es: "Ataque Tambaleante",
			it: "Attacco Capriola",
			pt: "Ataque Cambalhota",
			de: "Taumler"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Lightning Slam",
			fr: "Tacle Foudroyant",
			es: "Golpe Rayo",
			it: "Fulmischianto",
			pt: "Pancada de Raios",
			de: "Wuchtiger Einschlag"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Lightning Slam.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Tacle Foudroyant.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Rayo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Fulmischianto.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Pancada de Raios.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Wuchtiger Einschlag nicht einsetzen."
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "A single Electivire can provide enough electricity for all the buildings in a big city for a year."
	},

	thirdParty: {
		cardmarket: 545336,
		tcgplayer: 234195
	}
}

export default card
