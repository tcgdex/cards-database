import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Toucannon",
		fr: "Bazoucan",
		es: "Toucannon",
		'es-mx': "Toucannon",
		de: "Tukanon",
		it: "Toucannon",
		pt: "Toucannon"
	},

	illustrator: "Masako Tomii",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [733],
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Trumbeak"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Aerial Draw",
			fr: "Pioche Aérienne",
			es: "Robo Aéreo",
			'es-mx': "Robo Aéreo",
			de: "Höhenzug",
			it: "Pesca Aerea",
			pt: "Compra Aérea"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Draw a card.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Piochez une carte.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Roba 1 carta.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Roba 1 carta.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Ziehe 1 Karte.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Pesca una carta.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Compre uma carta."
		}
	}],

	attacks: [{
		name: {
			en: "Feather Rondo",
			fr: "Rondo Plumeux",
			es: "Rondó Pluma",
			'es-mx': "Rondó de Plumas",
			de: "Federrondo",
			it: "Rondò Piuma",
			pt: "Cântico Plumado"
		},

		cost: ["Colorless"],

		damage: "60+",

		effect: {
			en: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			es: "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco (seus e do seu oponente)."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895852,
				tcgplayer: 704825
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895852,
				tcgplayer: 704825
			}
		},
	],
}

export default card
