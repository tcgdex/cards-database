import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [875],
	set: Set,

	name: {
		'fr-fr': "Bekaglaçon-ex",
		'en-us': "Eiscue ex",
		'es-es': "Eiscue ex",
		'it-it': "Eiscue-ex",
		'pt-br': "Eiscue ex",
		'de-de': "Kubuin-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			'fr-fr': "Bloc Brûlant",
			'en-us': "Scalding Block",
			'es-es': "Bloque Abrasador",
			'it-it': "Ustioblocco",
			'pt-br': "Bloco Escaldante",
			'de-de': "Siedeblock"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie de ce Pokémon. Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			'en-us': "Discard an Energy from this Pokémon. During your opponent's next turn, the Defending Pokémon can't attack.",
			'es-es': "Descarta 1 Energía de este Pokémon. Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			'it-it': "Scarta un'Energia da questo Pokémon. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			'pt-br': "Descarte uma Energia deste Pokémon. Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725302,
				tcgplayer: 509979,
				cardtrader: 255664
			}
		},
	],

	suffix: "ex",
	illustrator: "Toshinao Aoki",

	
}

export default card
