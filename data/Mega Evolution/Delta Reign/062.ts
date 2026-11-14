import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
		de: "Tohaido",
		es: "Sharpedo",
		it: "Sharpedo",
		pt: "Sharpedo",
		'es-mx': "Sharpedo"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Crunch",
			fr: "Mâchouille",
			de: "Knirscher",
			es: "Triturar",
			it: "Sgranocchio",
			pt: "Mastigada",
			'es-mx': "Triturar"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival."
		},

		damage: 60,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 728035,
				cardmarket: 918885
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 728035,
				cardmarket: 918885
			}
		}
	],
}

export default card