import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
		de: "Furnifraß",
		es: "Heatmor",
		it: "Heatmor",
		pt: "Heatmor",
		'es-mx': "Heatmor"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Destructive Flame",
			fr: "Flamme Destructrice",
			de: "Verzehrende Flamme",
			es: "Llama Destructiva",
			it: "Devastofiamma",
			pt: "Chama Destruidora",
			'es-mx': "Llama Destructiva"
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

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 727577,
				cardmarket: 918839
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 727577,
				cardmarket: 918839
			}
		}
	],
}

export default card