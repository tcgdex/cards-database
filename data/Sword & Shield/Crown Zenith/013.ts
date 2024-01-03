import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Leafeon V",
		fr: "Phyllali V",
		es: "Leafeon V",
		it: "Leafeon V",
		pt: "Leafeon V",
		de: "Folipurba V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Leaf Guard",
			fr: "Feuille Garde",
			es: "Defensa Hoja",
			it: "Fogliamanto",
			pt: "Guarda Folha",
			de: "Floraschild"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Slashing Strike",
			fr: "Coup Déchirant",
			es: "Golpe Cuchillazo",
			it: "Lacerattacco",
			pt: "Ataque Cortante",
			de: "Schlitzender Schlag"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Slashing Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Cuchillazo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Ataque Cortante.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Schlag nicht einsetzen."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
