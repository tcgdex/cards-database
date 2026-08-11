import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [601],
	set: Set,

	name: {
		'en-us': "Klinklang",
		'fr-fr': "Cliticlic",
		'de-de': "Klikdiklak",
		'it-it': "Klinklang",
		'pt-br': "Klinklang",
		'es-es': "Klinklang",
		'es-mx': "Klinklang"
	},

	illustrator: "Amelicart",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Klang",
		'fr-fr': "Clic",
		'de-de': "Kliklak",
		'it-it': "Klang",
		'pt-br': "Klang",
		'es-es': "Klang",
		'es-mx': "Klang"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Gear Coating",
			'fr-fr': "Revêtement Engrenage",
			'de-de': "Getriebebeschichtung",
			'it-it': "Rivestimento di Ingranaggi",
			'pt-br': "Blindagem de Engrenagem",
			'es-es': "Engranaje Engrasado",
			'es-mx': "Recubrimiento de Engranajes"
		},

		effect: {
			'en-us': "All of your Pokémon that have any {M} Energy attached take 20 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
			'fr-fr': "Vos Pokémon auxquels de l'Énergie {M} est attachée subissent 20 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
			'de-de': "Allen deinen Pokémon, an die mindestens 1 {M}-Energie angelegt ist, werden durch Attacken von Pokémon deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Tutti i tuoi Pokémon che hanno delle Energie {M} assegnate subiscono 20 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Todos os seus Pokémon que têm alguma Energia {M} ligada a eles recebem 20 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
			'es-es': "Los ataques de los Pokémon de tu rival hacen 20 puntos de daño menos a todos tus Pokémon que tengan alguna Energía {M} unida (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Los ataques de los Pokémon de tu rival hacen 20 puntos de daño menos a todos tus Pokémon que tengan alguna Energía {M} unida (después de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'de-de': "Einhämmern",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'es-es': "Martillear",
			'es-mx': "Martillar"
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836039,
				tcgplayer: 642182
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836039,
				tcgplayer: 642182
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836436,
				tcgplayer: 642423
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836438,
				tcgplayer: 642351
			}
		}
	]
}

export default card
