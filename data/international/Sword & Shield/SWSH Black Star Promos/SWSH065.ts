import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eevee V",
		'fr-fr': "Évoli V",
		'es-es': "Eevee V",
		'it-it': "Eevee V",
		'pt-br': "Eevee V",
		'de-de': "Evoli V"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'de-de': "Sammeln"
		},

		effect: {
			'en-us': "Draw 3 cards.",
			'fr-fr': "Piochez 3 cartes.",
			'es-es': "Roba 3 cartas.",
			'it-it': "Pesca tre carte.",
			'pt-br': "Compre 3 cartas.",
			'de-de': "Ziehe 3 Karten."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Brave Buddies",
			'fr-fr': "Copains Courageux",
			'es-es': "Colegas Osados",
			'it-it': "Amici Coraggiosi",
			'pt-br': "Bravos Amigos",
			'de-de': "Kühne Kumpel"
		},

		effect: {
			'en-us': "If you played a Supporter card from your hand during this turn, this attack does 80 more damage.",
			'fr-fr': "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 80 puntos de daño más.",
			'it-it': "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 80 danni in più.",
			'pt-br': "Se você jogou 1 carta de Apoiador da sua mão durante este turno, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	stage: "Basic",
	dexId: [133],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 496555
	}
}

export default card
