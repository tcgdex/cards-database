import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Victini",
		fr: "Victini",
		es: "Victini",
		it: "Victini",
		pt: "Victini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flippity Flap",
			fr: "Flip Flap",
			es: "Aleteo Repentino",
			it: "Batti e Ribatti",
			pt: "Bater de Asas"
		},

		effect: {
			en: "Shuffle your hand into your deck. Then, draw 6 cards.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
			es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
			it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte.",
			pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas."
		}
	}, {
		cost: ["Fire"],

		name: {
			en: "Singe Off",
			fr: "Retrait Roussi",
			es: "Chamuscar",
			it: "Bruciacchiare",
			pt: "Calcinar"
		},

		effect: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia Especial do Pokémon Ativo do seu oponente."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card