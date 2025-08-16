import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [134],
	set: Set,

	name: {
		fr: "Aquali VMAX",
		de: "Aquana VMAX",
		es: "Vaporeon VMAX",
		pt: "Vaporeon VMAX",
		it: "Vaporeon VMAX",
		en: "Vaporeon VMAX"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	evolveFrom: {
		fr: "Aquali-V",
		de: "Aquana-V",
		es: "Vaporeon V",
		pt: "Vaporeon V",
		it: "Vaporeon-V",
		en: "Vaporeon V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Bulle Capsule",
			de: "Blubbkapsel",
			es: "Cápsula Burbuja",
			pt: "Cápsula de Bolha",
			it: "Bollacapsula",
			en: "Bubble Pod"
		},

		effect: {
			fr: "Placez un Pokémon {W} de votre pile de défausse sur votre Banc. Dans ce cas, attachez jusqu'à 3 cartes Énergie {W} de votre pile de défausse à ce Pokémon-là.",
			de: "Lege 1 {W}-Pokémon aus deinem Ablagestapel auf deine Bank. Wenn du das machst, lege bis zu 3 {W}-Energiekarten aus deinem Ablagestapel an jenes Pokémon an.",
			es: "Pon 1 Pokémon {W} de tu pila de descartes en tu Banca. Si lo haces, une hasta 3 cartas de Energía {W} de tu pila de descartes a ese Pokémon.",
			pt: "Coloque um Pokémon {W} da sua pilha de descarte no seu Banco. Se fizer isto, ligue até 3 cartas de Energia {W} da sua pilha de descarte àquele Pokémon.",
			it: "Prendi un Pokémon {W} dalla tua pila degli scarti e mettilo nella tua panchina. Se lo fai, assegna a quel Pokémon fino a tre carte Energia {W} dalla tua pila degli scarti.",
			en: "Put a {W} Pokémon from your discard pile onto your Bench. If you do, attach up to 3 {W} Energy cards from your discard pile to that Pokémon."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Torrentomax",
			de: "Dyna-Sturzbach",
			es: "Maxitorrente",
			pt: "Dilúvio Max",
			it: "Dynacquaiuto",
			en: "Max Torrent"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 100 danni in più.",
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 100 more damage."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 583207
	}
}

export default card