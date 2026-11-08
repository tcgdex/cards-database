import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [71],
	set: Set,

	name: {
		'fr-fr': "Empiflor",
		'en-us': "Victreebel",
		'es-es': "Victreebel",
		'it-it': "Victreebel",
		'pt-br': "Victreebel",
		'de-de': "Sarzenia"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Boustiflor",
		'en-us': "Weepinbell",
		'es-es': "Weepinbell",
		'it-it': "Weepinbell",
		'pt-br': "Weepinbell",
		'de-de': "Ultrigaria"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Relâche",
			'en-us': "Spit Up",
			'es-es': "Escupir",
			'it-it': "Sfoghenergia",
			'pt-br': "Cuspir",
			'de-de': "Entfessler"
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Acide Lent",
			'en-us': "Slow-Acting Acid",
			'es-es': "Ácido de Acción Lenta",
			'it-it': "Acido a Rilento",
			'pt-br': "Ácido de Efeito Lento",
			'de-de': "Träge Säure"
		},

		effect: {
			'fr-fr': "À la fin du prochain tour de votre adversaire, placez 12 marqueurs de dégâts sur le Pokémon Défenseur.",
			'en-us': "At the end of your opponent's next turn, put 12 damage counters on the Defending Pokémon.",
			'es-es': "Al final del próximo turno de tu rival, pon 12 contadores de daño en el Pokémon Defensor.",
			'it-it': "Alla fine del prossimo turno del tuo avversario, metti 12 segnalini danno sul Pokémon difensore.",
			'pt-br': "Coloque 12 contadores de dano no Pokémon Defensor no final do próximo turno do seu oponente.",
			'de-de': "Lege am Ende des nächsten Zuges deines Gegners 12 Schadensmarken auf das Verteidigende Pokémon."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Once ingested into this Pokémon's body, even the hardest object will melt into nothing.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733666,
				tcgplayer: 516564,
				cardtrader: 261223
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733666,
				tcgplayer: 516564,
				cardtrader: 261223
			}
		},
	],

	illustrator: "Jerky",

	
}

export default card
