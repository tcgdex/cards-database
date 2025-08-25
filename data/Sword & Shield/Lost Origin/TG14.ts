import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		en: "Centiskorch V",
		fr: "Scolocendre V",
		es: "Centiskorch V",
		it: "Centiskorch V",
		pt: "Centiskorch V",
		de: "Infernopod V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Radiating Heat",
			fr: "Chaleur Irradiante",
			es: "Calor Radiante",
			it: "Calore Radiante",
			pt: "Calor Radiante",
			de: "Strahlende Hitze"
		},

		effect: {
			en: "You may discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon.",
			fr: "Vous pouvez défausser une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Puedes descartar 1 Energía de este Pokémon. Si lo haces, descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Puoi scartare un'Energia da questo Pokémon. Se lo fai, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Você pode descartar 1 Energia deste Pokémon. Se fizer isto, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			de: "Du kannst 1 Energie von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Fire", "Fire"],

		name: {
			en: "Burning Train",
			fr: "Train Brûlant",
			es: "Tren Ardiente",
			it: "Treno Infuocato",
			pt: "Trem Incendiário",
			de: "Brennender Zug"
		},

		damage: 180
	}],

	retreat: 3,
	regulationMark: "D",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 670830
	}
}

export default card