import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Leveinard",
		en: "Chansey",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Bonus Chance",
			en: "Lucky Bonus",
			es: "Regalo Fortuito",
			it: "Bonus Fortunato",
			pt: "Bônus da Sorte",
			de: "Glücksbonus"
		},

		effect: {
			fr: "Si vous avez obtenu ce Pokémon en récupérant une carte Récompense face cachée pendant votre tour, et si votre Banc n'est pas plein, plutôt que d'ajouter cette carte à votre main, vous pouvez la placer sur votre Banc. Si vous avez placé ce Pokémon sur votre Banc de cette façon, lancez une pièce. Si c'est face, récupérez une carte Récompense supplémentaire.",
			en: "If you took this Pokémon as a face-down Prize card during your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench. If you put this Pokémon onto your Bench in this way, flip a coin. If heads, take 1 more Prize card.",
			es: "Si has cogido este Pokémon de entre las cartas de Premio que están boca abajo durante tu turno y tu Banca no está llena, antes de ponerlo en tu mano, puedes ponerlo en tu Banca. Si pones este Pokémon en tu Banca de esta manera, lanza 1 moneda. Si sale cara, coge 1 carta de Premio más.",
			it: "Se hai preso questo Pokémon come carta Premio coperta durante il tuo turno e la tua panchina non è piena, prima di aggiungerlo alle carte che hai in mano, puoi metterlo nella tua panchina. Se hai messo questo Pokémon nella tua panchina in questo modo, lancia una moneta. Se esce testa, prendi una carta Premio in più.",
			pt: "Se você pegou este Pokémon como uma carta de Prêmio virada para baixo durante o seu turno e o seu Banco não estiver cheio, antes de colocá-lo na sua mão, você poderá colocá-lo no seu Banco. Se você colocar este Pokémon no seu Banco desta forma, jogue uma moeda. Se sair cara, pegue 1 carta de Prêmio a mais.",
			de: "Wenn du dieses Pokémon während deines Zuges als verdeckte Preiskarte genommen hast und deine Bank nicht voll ist, kannst du es, bevor du es auf deine Hand nimmst, auf deine Bank legen. Wenn du auf diese Weise dieses Pokémon auf deine Bank gelegt hast, wirf 1 Münze. Nimm bei Kopf 1 Preiskarte mehr."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Gifle Douce",
			en: "Gentle Slap",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			de: "Sanfter Hieb"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card