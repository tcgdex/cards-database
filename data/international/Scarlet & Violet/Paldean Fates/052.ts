import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [853],
	set: Set,

	name: {
		'en-us': "Grapploct",
		'fr-fr': "Krakos",
		'es-es': "Grapploct",
		'it-it': "Grapploct",
		'pt-br': "Grapploct",
		'de-de': "Kaocto"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Clobbopus",
		'fr-fr': "Poulpaf",
		'es-es': "Clobbopus",
		'it-it': "Clobbopus",
		'pt-br': "Clobbopus",
		'de-de': "Klopptopus"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Slow-Acting Syncope",
			'fr-fr': "Syncope à Retardement",
			'es-es': "Síncope de Acción Lenta",
			'it-it': "Sincope Differita",
			'pt-br': "Síncope a Conta-gotas",
			'de-de': "Schleichende Ohnmacht"
		},

		effect: {
			'en-us': "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out.",
			'fr-fr': "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera mis K.O.",
			'es-es': "Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate.",
			'it-it': "Alla fine del prossimo turno del tuo avversario, il Pokémon difensore verrà messo KO.",
			'pt-br': "No final do próximo turno do seu oponente, o Pokémon Defensor será Nocauteado.",
			'de-de': "Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig."
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Mach Cross",
			'fr-fr': "Passage Éclair",
			'es-es': "Puñetazo Mach",
			'it-it': "Incromach",
			'pt-br': "Cruzado Veloz",
			'de-de': "Tempo-Cross"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751589,
				tcgplayer: 534414,
				cardtrader: 274236
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751589,
				tcgplayer: 534414,
				cardtrader: 274236
			}
		},
	],

	illustrator: "Sanosuke Sakuma",

	description: {
		'en-us': "Searching for an opponent to test its skills against, it emerges onto land. Once the battle is over, it returns to the sea.",
	},

}

export default card
