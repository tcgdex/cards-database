import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Beautifly",
		fr: "Charmillon",
		es: "Beautifly",
		it: "Beautifly",
		pt: "Beautifly",
		de: "Papinella"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		267,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
		es: "Silcoon",
		it: "Silcoon",
		pt: "Silcoon",
		de: "Schaloko"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Miraculous Scales",
				fr: "Écailles Miraculeuses",
				es: "Escamas Milagrosas",
				it: "Miracolscaglie",
				pt: "Escamas Miraculosas",
				de: "Wundersame Schuppen"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon-EX.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon-EX de votre adversaire.",
				es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon-EX de tu rival.",
				it: "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon-EX del tuo avversario.",
				pt: "Previne todos os danos causados a este Pokémon pelos ataques dos Pokémon-EX do seu oponente.",
				de: "Verhindere allen Schaden, der diesem Pokémon durch Angriffe der Pokémon-EX deines Gegners zugefügt würde."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
				es: "Remolino",
				it: "Turbine",
				pt: "Ataque de Vento",
				de: "Wirbelwind"
			},
			effect: {
				en: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				es: "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Você poderá fazer com que seu oponente troque o Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				de: "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
