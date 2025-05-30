import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Rotom",
		fr: "Motisma",
		de: "Rotom",
		it: "Rotom",
		es: "Rotom",
		pt: "Rotom"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Junk Hunt",
			fr: "Marché aux Puces",
			de: "Müllsammler",
			it: "Spulciascarti",
			es: "Buscachatarra",
			pt: "Caçada no Lixo"
		},

		effect: {
			en: "Put an Item card from your discard pile into your hand.",
			fr: "Ajoutez une carte Objet de votre pile de défausse à votre main.",
			de: "Nimm 1 Itemkarte aus deinem Ablagestapel auf deine Hand.",
			it: "Prendi una carta Strumento dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			es: "Pon 1 carta de Objeto de tu pila de descartes en tu mano.",
			pt: "Coloque uma carta de Item da sua pilha de descarte na sua mão."
		}
	}, {
		cost: ["Lightning"],

		name: {
			en: "Thunder Shock",
			fr: "Éclair",
			de: "Donnerschock",
			it: "Tuonoshock",
			es: "Impactrueno",
			pt: "Trovoada de Choques"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card