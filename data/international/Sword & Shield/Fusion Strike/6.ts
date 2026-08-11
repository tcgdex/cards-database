import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [286],
	set: Set,

	name: {
		'en-us': "Breloom V",
		'fr-fr': "Chapignon V",
		'es-es': "Breloom V",
		'it-it': "Breloom V",
		'pt-br': "Breloom V",
		'de-de': "Kapilz V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "PLANETA Mochizuki",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Counter",
			'fr-fr': "Riposte",
			'de-de': "Konter",
			'es-es': "Contraataque",
			'pt-br': "Contra-atacar",
			'it-it': "Contrattacco"
		},

		damage: "20+",

		effect: {
			'en-us': "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage.",
			'fr-fr': "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts.",
			'de-de': "Wenn diesem Pokémon während des letzten Zuges deines Gegners durch eine Attacke Schaden zugefügt wurde, fügt diese Attacke genauso viel Schaden mehr zu.",
			'es-es': "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival, este ataque hace ese número de puntos de daño más.",
			'pt-br': "Se este Pokémon tiver sido danificado por um ataque durante o último turno do seu oponente, este ataque causará a mesma quantidade de dano a mais.",
			'it-it': "Se questo Pokémon è stato danneggiato da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge altrettanti danni in più."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Mach Cross",
			'fr-fr': "Passage Éclair",
			'de-de': "Tempo-Cross",
			'es-es': "Puñetazo Mach",
			'pt-br': "Cruzado Veloz",
			'it-it': "Incromach"
		},

		damage: 140
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582034,
				tcgplayer: 253076
			}
		},
	],
}

export default card
