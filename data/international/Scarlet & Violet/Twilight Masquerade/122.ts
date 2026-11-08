import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [306],
	set: Set,

	name: {
		'en-us': "Aggron",
		'fr-fr': "Galeking",
		'es-es': "Aggron",
		'it-it': "Aggron",
		'pt-br': "Aggron",
		'de-de': "Stolloss"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'es-es': "Lairon",
		'it-it': "Lairon",
		'pt-br': "Lairon",
		'de-de': "Stollrak"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Angry Slam",
			'fr-fr': "Poussée Furieuse",
			'es-es': "Golpe Ira",
			'it-it': "Schianto Furioso",
			'pt-br': "Pancada Raivosa",
			'de-de': "Wütender Hieb"
		},

		effect: {
			'en-us': "This attack does 50 damage for each of your Pokémon that has any damage counters on it.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon ayant au moins un marqueur de dégâts.",
			'es-es': "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon que tenga algún contador de daño sobre él.",
			'it-it': "Questo attacco infligge 50 danni per ogni tuo Pokémon che ha dei segnalini danno.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon que tem algum contador de dano nele.",
			'de-de': "Diese Attacke fügt für jedes deiner Pokémon, auf dem mindestens 1 Schadensmarke liegt, 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Guard Claw",
			'fr-fr': "Griffe de Garde",
			'es-es': "Garra Guardia",
			'it-it': "Difesartiglio",
			'pt-br': "Garra Protetora",
			'de-de': "Abwehrklaue"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 120
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
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "Aggron has a horn sharp enough to perforate thick iron sheets. It brings down its opponents by ramming into them horn first.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769296,
				tcgplayer: 550166
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769296,
				tcgplayer: 550166
			}
		},
	],

	illustrator: "Dsuke",

}

export default card