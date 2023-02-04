import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Chimecho",
		fr: "Éoko",
		es: "Chimecho",
		it: "Chimecho",
		pt: "Chimecho",
		de: "Palimpalim"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Dreaming Tone",
			fr: "Mélodie Rêveuse",
			es: "Tono Ensueño",
			it: "Tono Onirico",
			pt: "Tom Sonhador",
			de: "Verträumter Klang"
		},

		effect: {
			en: "During your opponent's next turn, if an Energy card is attached to the Defending Pokémon from your opponent's hand, that Pokémon will be Asleep.",
			fr: "Pendant le prochain tour de votre adversaire, si une carte Énergie est attachée au Pokémon Défenseur depuis la main de votre adversaire, ce Pokémon-là sera Endormi.",
			es: "Durante el próximo turno de tu rival, si se une 1 carta de Energía de la mano de tu rival al Pokémon Defensor, ese Pokémon pasa a estar Dormido.",
			it: "Durante il prossimo turno del tuo avversario, se una carta Energia viene assegnata al Pokémon difensore dalla mano del tuo avversario, quel Pokémon verrà addormentato.",
			pt: "Durante o próximo turno do seu oponente, se 1 carta de Energia da mão do seu oponente for ligada ao Pokémon Defensor, aquele Pokémon ficará Adormecido.",
			de: "Wenn während des nächsten Zuges deines Gegners 1 Energiekarte aus der Hand deines Gegners an das Verteidigende Pokémon angelegt wird, schläft jenes Pokémon."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Hang Down",
			fr: "Suspension",
			es: "Prender",
			it: "Tirar Giù",
			pt: "Dependurar",
			de: "Herunterhängen"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card