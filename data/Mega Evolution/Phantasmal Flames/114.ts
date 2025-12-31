import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Empoleon ex",
		fr: "Pingoléon-ex",
		es: "Empoleon ex",
		'es-mx': "Empoleon ex",
		de: "Impoleon-ex",
		it: "Empoleon-ex",
		pt: "Empoleon ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],
	stage: "Stage2",
	dexId: [395],

	abilities: [{
		type: "Ability",

		name: {
			en: "Emperor's Stance",
			fr: "Posture de l'Empereur",
			es: "Posición del Emperador",
			'es-mx': "Postura del Emperador",
			de: "Kaiserliche Abwehr",
			it: "Posa dell'Imperatore",
			pt: "Postura do Imperador"
		},

		effect: {
			en: "Prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			fr: "Évitez tous les effets infligés à ce Pokémon provenant des attaques utilisées par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			es: "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon. (El daño no es un efecto).",
			'es-mx': "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			de: "Verhindere alle Effekte der von Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)",
			it: "Previeni tutti gli effetti degli attacchi usati dai Pokémon del tuo avversario inflitti a questo Pokémon. I danni non sono un effetto.",
			pt: "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)"
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Iron Feathers",
			fr: "Plumes de Fer",
			es: "Plumaje Férreo",
			'es-mx': "Plumaje Férreo",
			de: "Eisenfedern",
			it: "Piume d'Acciaio",
			pt: "Penas Férreas"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 60 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 60 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 60 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 60 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 60 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 60 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		},

		damage: 210
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857689
	}
}

export default card