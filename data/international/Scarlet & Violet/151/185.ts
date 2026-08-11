import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [24],
	set: Set,

	name: {
		'fr-fr': "Arbok-ex",
		'en-us': "Arbok ex",
		'es-es': "Arbok ex",
		'it-it': "Arbok-ex",
		'pt-br': "Arbok ex",
		'de-de': "Arbok-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Abo",
		'en-us': "Ekans",
		'es-es': "Ekans",
		'it-it': "Ekans",
		'pt-br': "Ekans",
		'de-de': "Rettan"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'fr-fr': "Astreinte",
			'en-us': "Bind Down",
			'es-es': "Amarrar",
			'it-it': "Legafermo",
			'pt-br': "Aprisionamento",
			'de-de': "Anbinden"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 70
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'fr-fr': "Crochets Menaçants",
			'en-us': "Menacing Fangs",
			'es-es': "Colmillos Amenazantes",
			'it-it': "Zanne Minacciose",
			'pt-br': "Presas Ameaçadoras",
			'de-de': "Bedrohliche Fänge"
		},

		effect: {
			'fr-fr': "Votre adversaire défausse 2 cartes de sa main.",
			'en-us': "Your opponent discards 2 cards from their hand.",
			'es-es': "Tu rival descarta 2 cartas de su mano.",
			'it-it': "Il tuo avversario scarta due carte che ha in mano.",
			'pt-br': "Seu oponente descarta 2 cartas da mão dele.",
			'de-de': "Dein Gegner legt 2 Karten aus seiner Hand auf seinen Ablagestapel."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733780,
				tcgplayer: 517014,
				cardtrader: 261277
			}
		},
	],

	suffix: "ex",
	illustrator: "Eske Yoshinob",

	
}

export default card
