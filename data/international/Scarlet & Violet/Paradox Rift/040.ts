import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [484],
	set: Set,

	name: {
		'en-us': "Palkia",
		'fr-fr': "Palkia",
		'es-es': "Palkia",
		'it-it': "Palkia",
		'pt-br': "Palkia",
		'de-de': "Palkia"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Teleportation Burst",
			'fr-fr': "Téléportation Explosive",
			'es-es': "Explosión Teleportadora",
			'it-it': "Scoppio Teletrasporto",
			'pt-br': "Teletransporte Explosivo",
			'de-de': "Blitz-Teleportation"
		},

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Prize Count",
			'fr-fr': "Compteur de Récompense",
			'es-es': "Cuenta de Premios",
			'it-it': "Contapremi",
			'pt-br': "Contagem de Prêmios",
			'de-de': "Preiszähler"
		},

		effect: {
			'en-us': "If you have more Prize cards remaining than your opponent, this attack does 80 more damage.",
			'fr-fr': "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si te quedan más cartas de Premio que a tu rival, este ataque hace 80 puntos de daño más.",
			'it-it': "Se hai più carte Premio rimanenti del tuo avversario, questo attacco infligge 80 danni in più.",
			'pt-br': "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It has the ability to distort space. It is described as a deity in Sinnoh-region mythology.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740516,
				tcgplayer: 523649,
				cardtrader: 265174
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740516,
				tcgplayer: 523649,
				cardtrader: 265174
			}
		},
	],

	illustrator: "Ryuta Fuse",

	
}

export default card
