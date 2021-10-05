import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Eevee V",
		fr: "Évoli V",
		es: "Eevee V",
		it: "Eevee V",
		pt: "Eevee V",
		de: "Evoli V"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			it: "Tassa",
			pt: "Collect",
			de: "Sammeln"
		},

		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
			es: "Roba 3 cartas.",
			it: "Pesca tre carte.",
			pt: "Draw 3 cards.",
			de: "Ziehe 3 Karten."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Brave Buddies",
			fr: "Copains Courageux",
			es: "Colegas Osados",
			it: "Amici Coraggiosi",
			pt: "Brave Buddies",
			de: "Kühne Kumpel"
		},

		effect: {
			en: "If you played a Supporter card from your hand during this turn, this attack does 80 more damage.",
			fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 80 puntos de daño más.",
			it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 80 danni in più.",
			pt: "If you played a Supporter card from your hand during this turn, this attack does 80 more damage.",
			de: "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
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
	suffix: "V",
	dexId: [133],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card