import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Kangaskhan ex",
		fr: "Kangourex-ex de la Team Rocket",
		es: "Kangaskhan ex del Team Rocket",
		'es-mx': "Kangaskhan ex del Equipo Rocket",
		de: "Team Rockets Kangama-ex",
		it: "Kangaskhan-ex del Team Rocket",
		pt: "Kangaskhan ex da Equipe Rocket"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Comet Punch",
			fr: "Poing Comète",
			es: "Puño Cometa",
			'es-mx': "Puño Cometa",
			de: "Kometenhieb",
			it: "Cometapugno",
			pt: "Soco de Cometa"
		},

		effect: {
			en: "Flip 4 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'es-mx': "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			pt: "Jogue 4 moedas. Este ataque causa 30 pontos de dano para cada cara."
		},

		damage: "30×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Wicked Impact",
			fr: "Impact Malveillant",
			es: "Impacto Malvado",
			'es-mx': "Impacto Malvado",
			de: "Fieser Einschlag",
			it: "Impatto Malefico",
			pt: "Impacto Perverso"
		},

		effect: {
			en: "If you played a Supporter card that has \"Team Rocket\" in its name from your hand during this turn, this attack does 100 more damage.",
			fr: "Si vous avez joué de votre main une carte Supporter ayant \" Team Rocket \" dans son nom pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si has jugado una carta de Partidario de tu mano que tenga \"Team Rocket\" en su nombre durante este turno, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si jugaste alguna carta de Partidario de tu mano que tenga \"Equipo Rocket\" en su nombre durante este turno, este ataque hace 100 puntos de daño más.",
			de: "Wenn du eine Unterstützerkarte, bei der \"Team Rocket\" zum Namen gehört, während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Se hai giocato una carta Aiuto che ha \"Team Rocket\" nel nome dalla tua mano durante questo turno, questo attacco infligge 100 danni in più.",
			pt: "Se você jogou uma carta de Apoiador que tem \"Equipe Rocket\" em seu nome da sua mão durante este turno, este ataque causará 100 pontos de dano a mais."
		},

		damage: "120+"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675974,
		cardmarket: 869773
	}
}

export default card