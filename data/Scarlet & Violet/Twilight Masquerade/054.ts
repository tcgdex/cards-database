import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		en: "Glaceon",
		fr: "Givrali",
		es: "Glaceon",
		it: "Glaceon",
		pt: "Glaceon",
		de: "Glaziola"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Permeating Chill",
			fr: "Froid Pénétrant",
			es: "Frío Penetrante",
			it: "Gelo Pungente",
			pt: "Frio Penetrante",
			de: "Durchdringende Kälte"
		},

		effect: {
			en: "At the end of your opponent's next turn, put 9 damage counters on the Defending Pokémon.",
			fr: "À la fin du prochain tour de votre adversaire, placez 9 marqueurs de dégâts sur le Pokémon Défenseur.",
			es: "Al final del próximo turno de tu rival, pon 9 contadores de daño en el Pokémon Defensor.",
			it: "Alla fine del prossimo turno del tuo avversario, metti nove segnalini danno sul Pokémon difensore.",
			pt: "Coloque 9 contadores de dano no Pokémon Defensor no final do próximo turno do seu oponente.",
			de: "Lege am Ende des nächsten Zuges deines Gegners 9 Schadensmarken auf das Verteidigende Pokémon."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Icicle Missile",
			fr: "Missile Stalactite",
			es: "Misil Carámbano",
			it: "Missilghiaccio",
			pt: "Míssil Gélido",
			de: "Eiszapfenrakete"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "rika",

	thirdParty: {
		cardmarket: 769228
	}
}

export default card