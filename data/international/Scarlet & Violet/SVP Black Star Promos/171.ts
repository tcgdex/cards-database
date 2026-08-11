import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		'en-us': "Glaceon",
		'pt-br': "Glaceon",
		'fr-fr': "Givrali",
		'de-de': "Glaziola",
		'es-es': "Glaceon",
		'it-it': "Glaceon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],

			name: {
				'en-us': "Permeating Chill",
				'pt-br': "Frio Penetrante",
				'fr-fr': "Froid Pénétrant",
				'de-de': "Durchdringende Kälte",
				'es-es': "Frío Penetrante",
				'it-it': "Gelo Pungente"
			},

			effect: {
				'en-us': "At the end of your opponent's next turn, put 9 damage counters on the Defending Pokémon.",
				'pt-br': "Coloque 9 contadores de dano no Pokémon Defensor no final do próximo turno do seu oponente.",
				'fr-fr': "À la fin du prochain tour de votre adversaire, placez 9 marqueurs de dégâts sur le Pokémon Défenseur.",
				'de-de': "Lege am Ende des nächsten Zuges deines Gegners 9 Schadensmarken auf das Verteidigende Pokémon.",
				'es-es': "Al final del próximo turno de tu rival, pon 9 contadores de daño en el Pokémon Defensor.",
				'it-it': "Alla fine del prossimo turno del tuo avversario, metti nove segnalini danno sul Pokémon difensore."
			},

			damage: 30
		},
		{
			cost: ["Water", "Colorless"],

			name: {
				'en-us': "Icicle Missile",
				'pt-br': "Míssil Gélido",
				'fr-fr': "Missile Stalactite",
				'de-de': "Eiszapfenrakete",
				'es-es': "Misil Carámbano",
				'it-it': "Missilghiaccio"
			},

			damage: 70
		}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Keisin",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 805368,
				tcgplayer: 611830
			},
		}
	],
}

export default card
