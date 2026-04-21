import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zacian",
		fr: "Zacian",
		es: "Zacian",
		'es-mx': "Zacian",
		de: "Zacian",
		it: "Zacian",
		pt: "Zacian"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Limit Break",
			fr: "Brèche Frontière",
			es: "Golpe Límite",
			'es-mx': "Ruptura de Límites",
			de: "Limitbruch",
			it: "Frangilimite",
			pt: "Limite Intenso"
		},

		effect: {
			en: "If your opponent has 3 or fewer Prize cards remaining, this attack does 90 more damage.",
			fr: "S'il reste 3 cartes Récompense ou moins à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si a tu rival le quedan 3 cartas de Premio o menos, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si a tu rival le quedan 3 cartas de Premio o menos, este ataque hace 90 puntos de daño más.",
			de: "Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se il tuo avversario ha tre o meno carte Premio rimanenti, questo attacco infligge 90 danni in più.",
			pt: "Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, este ataque causará 90 pontos de dano a mais."
		},

		damage: "50+"
	}],

	retreat: 2,
	regulationMark: "I",
	illustrator: "Shiburingaru",

	thirdParty: {
        tcgplayer: 663189,
        cardmarket: 857393
	},

    variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			stamp: ["set-logo","staff"]
		},
    ]
}

export default card