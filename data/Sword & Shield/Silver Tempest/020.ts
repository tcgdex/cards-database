import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		en: "Arcanine",
		fr: "Arcanin",
		es: "Arcanine",
		it: "Arcanine",
		pt: "Arcanine",
		de: "Arkani"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flame Cloak",
			fr: "Manteau de Feu",
			es: "Manto Ígneo",
			it: "Radunafuoco",
			pt: "Manto de Chamas",
			de: "Flammenumhang"
		},

		effect: {
			en: "Attach a Fire Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
			es: "Une 1 carta de Energía Fire de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia Fire dalla tua pila degli scarti.",
			pt: "Ligue 1 carta de Energia Fire da sua pilha de descarte a este Pokémon.",
			de: "Lege 1 Fire-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Fighting Tackle",
			fr: "Charge Combative",
			es: "Placaje Lucha",
			it: "Azione da Combattente",
			pt: "Investida de Luta",
			de: "Kampf-Tackle"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon V, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 100 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 100 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682061,
		tcgplayer: 451651
	}
}

export default card