import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Armaldo",
		fr: "Armaldo",
		es: "Armaldo",
		it: "Armaldo",
		pt: "Armaldo",
		de: "Armaldo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Anorith",
		fr: "Anorith",
		es: "Anorith",
		it: "Anorith",
		pt: "Anorith",
		de: "Anorith"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Reaping Claw",
			fr: "Griffe Faucheuse",
			es: "Pinza Segadora",
			it: "Falciartiglio",
			pt: "Garra Ceifadora",
			de: "Erntende Klaue"
		},

		effect: {
			en: "If your opponent's Active Pokémon has 100 HP or less remaining, it is Knocked Out.",
			fr: "S'il reste 100 PV ou moins au Pokémon Actif de votre adversaire, il est mis K.O.",
			es: "Si al Pokémon Activo de tu rival le quedan 100 PS o menos, queda Fuera de Combate.",
			it: "Se il Pokémon attivo del tuo avversario ha 100 PS o meno rimanenti, viene messo KO.",
			pt: "Se o Pokémon Ativo do seu oponente tiver PS restante de 100 ou menos, ele será Nocauteado.",
			de: "Wenn das Aktive Pokémon deines Gegners 100 oder weniger verbleibende KP hat, ist es kampfunfähig."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
			es: "Alud de Rocas",
			it: "Macignata",
			pt: "Rocha Esmagadora",
			de: "Felsenquetscher"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card