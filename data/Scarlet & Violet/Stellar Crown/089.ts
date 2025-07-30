import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Garganacl ex",
		fr: "Gigansel-ex",
		es: "Garganacl ex",
		it: "Garganacl-ex",
		pt: "Garganacl ex",
		de: "Saltigant-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Salty Body",
			fr: "Corps Salé",
			es: "Cuerpo Salino",
			it: "Corpo di Sale",
			pt: "Corpo Salino",
			de: "Salziger Körper"
		},

		effect: {
			en: "This Pokémon can't be affected by any Special Conditions.",
			fr: "Ce Pokémon ne peut être affecté par aucun État Spécial.",
			es: "Este Pokémon no puede verse afectado por ninguna Condición Especial.",
			it: "Questo Pokémon non può essere influenzato da condizioni speciali.",
			pt: "Este Pokémon não pode ser afetado por quaisquer Condições Especiais.",
			de: "Dieses Pokémon kann nicht von Speziellen Zuständen betroffen werden."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Block Hammer",
			fr: "Marteau Bloquant",
			es: "Bloqueo Martillo",
			it: "Bloccomartello",
			pt: "Martelo Bloqueador",
			de: "Blockhammer"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 60 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 60 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 60 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 60 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 60 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 170
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 785943
	}
}

export default card
