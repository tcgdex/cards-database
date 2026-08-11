import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Toucannon",
		'fr-fr': "Bazoucan",
		'es-es': "Toucannon",
		'es-mx': "Toucannon",
		'de-de': "Tukanon",
		'it-it': "Toucannon",
		'pt-br': "Toucannon"
	},

	illustrator: "miki kudo",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [733],
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Trumbeak"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Aerial Draw",
			'fr-fr': "Pioche Aérienne",
			'es-es': "Robo Aéreo",
			'es-mx': "Robo Aéreo",
			'de-de': "Höhenzug",
			'it-it': "Pesca Aerea",
			'pt-br': "Compra Aérea"
		},

		effect: {
			'en-us': "Once during your turn, you may use this Ability. Draw a card.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Piochez une carte.",
			'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Roba 1 carta.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Roba 1 carta.",
			'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Ziehe 1 Karte.",
			'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Pesca una carta.",
			'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. Compre uma carta."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Feather Rondo",
			'fr-fr': "Rondo Plumeux",
			'es-es': "Rondó Pluma",
			'es-mx': "Rondó de Plumas",
			'de-de': "Federrondo",
			'it-it': "Rondò Piuma",
			'pt-br': "Cântico Plumado"
		},

		cost: ["Colorless"],

		damage: "60+",

		effect: {
			'en-us': "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco (seus e do seu oponente)."
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
			type: "holo",
			thirdParty: {
				cardmarket: 895879,
				tcgplayer: 704851
			}
		},
	],
}

export default card
