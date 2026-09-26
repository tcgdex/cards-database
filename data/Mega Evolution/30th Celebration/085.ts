import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "This Lycanroc has an extremely vicious temperament. It will happily sustain injuries for the sake of taking down its opponent."
	},

	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		de: "Wolwerock",
		es: "Lycanroc",
		it: "Lycanroc",
		'es-mx': "Lycanroc",
		pt: "Lycanroc"
	},

	illustrator: "matazo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [745],
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Counter",
			fr: "Riposte",
			de: "Konter",
			es: "Contraataque",
			it: "Contrattacco",
			'es-mx': "Contraataque",
			pt: "Contra-atacar"
		},

		effect: {
			en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage.",
			fr: "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts.",
			de: "Wenn diesem Pokémon während des letzten Zuges deines Gegners durch eine Attacke Schaden zugefügt wurde, fügt diese Attacke genauso viel Schaden mehr zu.",
			es: "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival, este ataque hace ese número de puntos de daño más.",
			it: "Se questo Pokémon è stato danneggiato da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge altrettanti danni in più.",
			'es-mx': "Si este Pokémon recibió daño de un ataque durante el último turno de tu rival, este ataque hace esa cantidad de puntos de daño más.",
			pt: "Se este Pokémon tiver sido danificado por um ataque durante o último turno do seu oponente, este ataque causará a mesma quantidade de dano a mais."
		},

		damage: "10+",
		cost: ["Fighting"]
	}, {
		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
			de: "Felsenquetscher",
			es: "Alud de Rocas",
			it: "Macignata",
			'es-mx': "Aplastamiento Rocoso",
			pt: "Rocha Esmagadora"
		},

		damage: 80,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907692,
				tcgplayer: 716481
			}
		}
	],
}

export default card
