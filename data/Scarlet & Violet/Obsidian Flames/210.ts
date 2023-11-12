import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Bekaglaçon-ex",
		en: "Eiscue ex",
		es: "Eiscue ex",
		it: "Eiscue-ex",
		pt: "Eiscue ex",
		de: "Kubuin-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			fr: "Bloc Brûlant",
			en: "Scalding Block",
			es: "Bloque Abrasador",
			it: "Ustioblocco",
			pt: "Bloco Escaldante",
			de: "Siedeblock"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon. Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			en: "Discard an Energy from this Pokémon. During your opponent's next turn, the Defending Pokémon can't attack.",
			es: "Descarta 1 Energía de este Pokémon. Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			it: "Scarta un'Energia da questo Pokémon. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			pt: "Descarte uma Energia deste Pokémon. Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card