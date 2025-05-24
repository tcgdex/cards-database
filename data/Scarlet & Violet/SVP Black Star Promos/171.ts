import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Glaceon",
		pt: "Glaceon",
		fr: "Givrali",
		de: "Glaziola",
		es: "Glaceon",
		it: "Glaceon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],

			name: {
				en: "Permeating Chill",
				pt: "Frio Penetrante",
				fr: "Froid Pénétrant",
				de: "Durchdringende Kälte",
				es: "Frío Penetrante",
				it: "Gelo Pungente"
			},

			effect: {
				en: "At the end of your opponent's next turn, put 9 damage counters on the Defending Pokémon.",
				pt: "Coloque 9 contadores de dano no Pokémon Defensor no final do próximo turno do seu oponente.",
				fr: "À la fin du prochain tour de votre adversaire, placez 9 marqueurs de dégâts sur le Pokémon Défenseur.",
				de: "Lege am Ende des nächsten Zuges deines Gegners 9 Schadensmarken auf das Verteidigende Pokémon.",
				es: "Al final del próximo turno de tu rival, pon 9 contadores de daño en el Pokémon Defensor.",
				it: "Alla fine del prossimo turno del tuo avversario, metti nove segnalini danno sul Pokémon difensore."
			},

			damage: 30
		},
		{
			cost: ["Water", "Colorless"],

			name: {
				en: "Icicle Missile",
				pt: "Míssil Gélido",
				fr: "Missile Stalactite",
				de: "Eiszapfenrakete",
				es: "Misil Carámbano",
				it: "Missilghiaccio"
			},

			damage: 70
		},
	],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Keisin"
}

export default card