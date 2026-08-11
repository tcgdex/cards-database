import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		'en-us': "Glaceon",
		'fr-fr': "Givrali",
		'es-es': "Glaceon",
		'it-it': "Glaceon",
		'pt-br': "Glaceon",
		'de-de': "Glaziola"
	},

	rarity: "Uncommon",
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

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Permeating Chill",
			'fr-fr': "Froid Pénétrant",
			'es-es': "Frío Penetrante",
			'it-it': "Gelo Pungente",
			'pt-br': "Frio Penetrante",
			'de-de': "Durchdringende Kälte"
		},

		effect: {
			'en-us': "At the end of your opponent's next turn, put 9 damage counters on the Defending Pokémon.",
			'fr-fr': "À la fin du prochain tour de votre adversaire, placez 9 marqueurs de dégâts sur le Pokémon Défenseur.",
			'es-es': "Al final del próximo turno de tu rival, pon 9 contadores de daño en el Pokémon Defensor.",
			'it-it': "Alla fine del prossimo turno del tuo avversario, metti nove segnalini danno sul Pokémon difensore.",
			'pt-br': "Coloque 9 contadores de dano no Pokémon Defensor no final do próximo turno do seu oponente.",
			'de-de': "Lege am Ende des nächsten Zuges deines Gegners 9 Schadensmarken auf das Verteidigende Pokémon."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Icicle Missile",
			'fr-fr': "Missile Stalactite",
			'es-es': "Misil Carámbano",
			'it-it': "Missilghiaccio",
			'pt-br': "Míssil Gélido",
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

	description: {
		'en-us': "It lowers its body heat to freeze its fur. The hairs then become like needles it can fire.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769228,
				tcgplayer: 550098
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769228,
				tcgplayer: 550098
			}
		},
	],

	illustrator: "rika",

}

export default card