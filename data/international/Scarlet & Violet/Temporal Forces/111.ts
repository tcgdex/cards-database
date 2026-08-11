import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [212],
	set: Set,

	name: {
		'en-us': "Scizor ex",
		'fr-fr': "Cizayox-ex",
		'es-es': "Scizor ex",
		'it-it': "Scizor-ex",
		'pt-br': "Scizor ex",
		'de-de': "Scherox-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Steel Wing",
			'fr-fr': "Ailes d'Acier",
			'es-es': "Ala de Acero",
			'it-it': "Alacciaio",
			'pt-br': "Asa de Aço",
			'de-de': "Stahlflügel"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 70
	}, {
		cost: ["Metal", "Metal"],

		name: {
			'en-us': "Cross Breaker",
			'fr-fr': "Casse Croisée",
			'es-es': "Destructor Cruzado",
			'it-it': "Distruttore Incrociato",
			'pt-br': "Cruzado Quebrador",
			'de-de': "Cross-Brecher"
		},

		effect: {
			'en-us': "Discard up to 2 {M} Energy from this Pokémon. This attack does 120 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez jusqu'à 2 Énergies {M} de ce Pokémon. Cette attaque inflige 120 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta hasta 2 Energías {M} de este Pokémon. Este ataque hace 120 puntos de daño por cada carta que hayas descartado de esta manera.",
			'it-it': "Scarta fino a due Energie {M} da questo Pokémon. Questo attacco infligge 120 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte até 2 Energias {M} deste Pokémon. Este ataque causa 120 pontos de dano para cada carta descartada desta forma.",
			'de-de': "Lege bis zu 2 {M}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 120 Schadenspunkte zu."
		},

		damage: "120×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760741,
				tcgplayer: 542855
			}
		},
	],

	suffix: "ex",
	illustrator: "toriyufu",

}

export default card