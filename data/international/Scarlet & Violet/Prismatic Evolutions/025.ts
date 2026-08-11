import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		'en-us': "Glaceon",
		'fr-fr': "Givrali",
		'es-es': "Glaceon",
		'pt-br': "Glaceon",
		'it-it': "Glaceon",
		'de-de': "Glaziola"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Permeating Chill",
			'fr-fr': "Froid Pénétrant",
			'es-es': "Frío Penetrante",
			'pt-br': "Frio Penetrante",
			'it-it': "Gelo Pungente",
			'de-de': "Durchdringende Kälte"
		},

		effect: {
			'en-us': "At the end of your opponent's next turn, put 9 damage counters on the Defending Pokémon.",
			'fr-fr': "À la fin du prochain tour de votre adversaire, placez 9 marqueurs de dégâts sur le Pokémon Défenseur.",
			'es-es': "Al final del próximo turno de tu rival, pon 9 contadores de daño en el Pokémon Defensor.",
			'pt-br': "Coloque 9 contadores de dano no Pokémon Defensor no final do próximo turno do seu oponente.",
			'it-it': "Alla fine del prossimo turno del tuo avversario, metti nove segnalini danno sul Pokémon difensore.",
			'de-de': "Lege am Ende des nächsten Zuges deines Gegners 9 Schadensmarken auf das Verteidigende Pokémon."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Icicle Missile",
			'fr-fr': "Missile Stalactite",
			'es-es': "Misil Carámbano",
			'pt-br': "Míssil Gélido",
			'it-it': "Missilghiaccio",
			'de-de': "Eiszapfenrakete"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	illustrator: "rika",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805414,
				tcgplayer: 610380
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805414,
				tcgplayer: 610380
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806444,
				tcgplayer: 610554
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806445,
				tcgplayer: 610655
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 858731,
			}
		},
	],
}

export default card
