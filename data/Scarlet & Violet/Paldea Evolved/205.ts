import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [875],
	set: Set,

	name: {
		fr: "Bekaglaçon",
		en: "Eiscue",
		es: "Eiscue",
		it: "Eiscue",
		pt: "Eiscue",
		de: "Kubuin"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Coup d'Boule",
			en: "Headbutt",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			fr: "Bloc Glacial",
			en: "Frigid Block",
			es: "Bloque Glacial",
			it: "Blocco Glaciale",
			pt: "Bloco Frígido",
			de: "Kühler Block"
		},

		effect: {
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon. Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "Discard all Energy from this Pokémon. During your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance).",
			es: "Descarta todas las Energías de este Pokémon. Durante el próximo turno de tu rival, los ataques hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Scarta tutte le Energie da questo Pokémon. Durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Descarte todas as Energias deste Pokémon. Durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715680,
				tcgplayer: 497608,
				cardtrader: 248858
			}
		},
	],

	illustrator: "Nelnal",

	description: {
		en: "On hot days, these Pokémon press their ice cube heads together and pass the time cooling each other down.",
	},
}

export default card
