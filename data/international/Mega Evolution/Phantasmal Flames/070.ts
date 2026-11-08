import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Empoleon ex",
		'fr-fr': "Pingoléon-ex",
		'es-es': "Empoleon ex",
		'es-mx': "Empoleon ex",
		'de-de': "Impoleon-ex",
		'it-it': "Empoleon-ex",
		'pt-br': "Empoleon ex"
	},

	evolveFrom: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
		'es-es': "Prinplup",
		'es-mx': "Prinplup",
		'de-de': "Pliprin",
		'it-it': "Prinplup",
		'pt-br': "Prinplup",
	},

	rarity: "Double rare",
	category: "Pokemon",

	dexId: [395],
	hp: 320,
	types: ["Metal"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Emperor's Stance",
			'fr-fr': "Posture de l'Empereur",
			'es-es': "Posición del Emperador",
			'es-mx': "Postura del Emperador",
			'de-de': "Kaiserliche Abwehr",
			'it-it': "Posa dell'Imperatore",
			'pt-br': "Postura do Imperador"
		},

		effect: {
			'en-us': "Prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			'fr-fr': "Évitez tous les effets infligés à ce Pokémon provenant des attaques utilisées par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			'es-es': "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon. (El daño no es un efecto).",
			'es-mx': "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'de-de': "Verhindere alle Effekte der von Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)",
			'it-it': "Previeni tutti gli effetti degli attacchi usati dai Pokémon del tuo avversario inflitti a questo Pokémon. I danni non sono un effetto.",
			'pt-br': "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)"
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Iron Feathers",
			'fr-fr': "Plumes de Fer",
			'es-es': "Plumaje Férreo",
			'es-mx': "Plumaje Férreo",
			'de-de': "Eisenfedern",
			'it-it': "Piume d'Acciaio",
			'pt-br': "Penas Férreas"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 60 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 60 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 60 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 60 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 60 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 60 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		},

		damage: 210
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
	regulationMark: "I",

	illustrator: "5ban Graphics",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857645,
				tcgplayer: 662155,
				cardtrader: 356856
			}
		},
	],	
}

export default card
