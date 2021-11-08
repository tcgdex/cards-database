import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Milotic",
		fr: "Milobellus",
		es: "Milotic",
		it: "Milotic",
		pt: "Milotic",
		de: "Milotic"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "sui",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dew Guard",
			fr: "Garde Rosée",
			es: "Defensa Rocío",
			it: "Scudo di Rugiada",
			pt: "Dew Guard",
			de: "Schutztau"
		},

		effect: {
			en: "Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to you or your hand.",
			fr: "Chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur vous ou votre main.",
			es: "Cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos a ti o a tu mano.",
			it: "Ogni volta che il tuo avversario gioca una carta Aiuto che ha in mano, previeni tutti gli effetti di quella carta su di te e sulle carte che hai in mano.",
			pt: "Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to you or your hand.",
			de: "Verhindere jedes Mal, wenn dein Gegner 1 Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die dir oder deinen Handkarten zugefügt werden."
		}
	}],

	attacks: [{
		name: {
			en: "Double Smash",
			fr: "Double Broiement",
			es: "Golpe Doble",
			it: "Colpo Duplice",
			pt: "Double Smash",
			de: "Doppelstoß"
		},

		effect: {
			en: "Flip 2 coins. This attack does 70 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			pt: "Flip 2 coins. This attack does 70 damage for each heads.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
		es: "Feebas",
		it: "Feebas",
		pt: "Feebas",
		de: "Barschwa"
	},

	description: {
		en: "It's said that a glimpse of a Milotic and its beauty will calm any hostile emotions you're feeling."
	},

	dexId: [350],
	regulationMark: "E"
}

export default card
