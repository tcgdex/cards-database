import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		en: "Eevee V",
		fr: "Évoli V",
		es: "Eevee V",
		it: "Eevee V",
		pt: "Eevee V",
		de: "Evoli V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Vee Brave",
			fr: "Vraiment Vaillant",
			es: "Atre-Veedo",
			it: "Audace V",
			pt: "Bravo V",
			de: "V-Kühnheit"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon V, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 80 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 80 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691827,
		tcgplayer: 477251
	}
}

export default card
