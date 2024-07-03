import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [484],
	set: Set,

	name: {
		en: "Palkia",
		fr: "Palkia",
		es: "Palkia",
		it: "Palkia",
		pt: "Palkia",
		de: "Palkia"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Teleportation Burst",
			fr: "Téléportation Explosive",
			es: "Explosión Teleportadora",
			it: "Scoppio Teletrasporto",
			pt: "Teletransporte Explosivo",
			de: "Blitz-Teleportation"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Prize Count",
			fr: "Compteur de Récompense",
			es: "Cuenta de Premios",
			it: "Contapremi",
			pt: "Contagem de Prêmios",
			de: "Preiszähler"
		},

		effect: {
			en: "If you have more Prize cards remaining than your opponent, this attack does 80 more damage.",
			fr: "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si te quedan más cartas de Premio que a tu rival, este ataque hace 80 puntos de daño más.",
			it: "Se hai più carte Premio rimanenti del tuo avversario, questo attacco infligge 80 danni in più.",
			pt: "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card